let express = require('express');
let config = require('./config');
const mysql = require('mysql');
var cors = require('cors');
let express_graphql = require('express-graphql');
let { buildSchema } = require('graphql');

// GraphQL schema
let schema = buildSchema(`
    type Query {
      piece(id:Int): Piece
      pieces(sortOrder:SortOrder = DESC): [Piece]
    }
    
    type Client {
      id: Int
      name: String
      description: String
    }
    
    type Project {
      id: Int
      title: String
      client: Client
    }
    
    type Piece {
      pieceId: Int
      title: String
      description: String
      thumbnail: Image
      dateCreated: String
      dimensions: String
      category: String
      media: String
      images: [Image]
      project: Project
    }
    
    type Image {
      id: Int
      url: String
      description: String
    }
    
    enum SortBy {
      CATEGORY
      DATE
    }
    
    enum SortOrder {
      ASC
      DESC
    }
`);

let allPieces = [];

class Piece {
  constructor(options) {
    this.pieceId = options.pieceId;
    this.title = options.title;
    this.description = options.description;
    this.thumbnail = new Thumbnail(options.thumbnailPath);
    this.dateCreated = (new Date(options.dateCreated)).getTime();
    this.dimensions = options.dimensions;
    this.media = options.media;
    this.category = options.category;
    this.images = [];
  }

  addImage(path, description) {
    this.images.push(new DisplayImage(path, description))
  }
}

class Image {
  constructor(url, description) {
    this.url = url;
    this.description = description;
  }
}

class DisplayImage extends Image {
  constructor(path, description) {
    super(config.site.baseUrl + '/images/pieces/' + path, description);
  }
}

class Thumbnail extends Image {
  constructor(path, description) {
    super(config.site.baseUrl + '/images/thumbnails/' + path, description);
  }
}

// Root resolver
let root = {
  piece: (args) => allPieces[args.id],
  pieces: () => allPieces
};

const connection = mysql.createConnection(config.db);
connection.connect(err => {
  if (err) {
    console.error('An error occurred while connecting to the DB');
    throw err;
  }
});


let sql = `
  SELECT pieces.*, 
    projects.project_title, 
    projects.project_id, 
    projects.project_sequence,
    clients.client_id,
    clients.client_name,
    clients.client_sequence,
    images.image_id,
    images.image_path,
    images.image_description,
    images.image_sequence
  FROM erichamlin_pieces pieces
  LEFT JOIN erichamlin_projects projects ON pieces.project_id = projects.project_id
  LEFT JOIN erichamlin_clients clients ON projects.client_id = clients.client_id
  LEFT JOIN erichamlin_images images ON pieces.piece_id = images.piece_id
  `;

connection.query(sql, (error, pieces, fields) => {
  if (error) {
    console.error('An error occurred while executing the query');
    throw error;
  }
  for (let idx in pieces) {
    let piece;
    let pieceData = pieces[idx];
    if (allPieces[pieceData.piece_id]) {
      piece = allPieces[pieceData.piece_id];
    }
    else {
      allPieces[pieceData.piece_id] = piece = new Piece({
        pieceId:       pieceData.piece_id,
        title:         pieceData.title,
        description:   pieceData.description,
        thumbnailPath: pieceData.thumbnail_path,
        dateCreated:   pieceData.date_created,
        dimensions:    pieceData.dimensions,
        category:      pieceData.category,
        media:         pieceData.media
      });
    }

    if (pieceData.image_path) {
      piece.addImage(pieceData.image_path)
    }
  }
});

// Create an express server and a GraphQL endpoint
let app = express();
app.use(cors());
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
