let { buildSchema } = require('graphql');

// GraphQL schema
exports.default =
  buildSchema(`
    type Query {
      piece(id:Int): Piece
      pieces(sortOrder:SortOrder = DESC): [Piece]
      categories: [Category]
    }
    
    type Category {
      categoryId: Int
      categoryName: String
      categoryOrder: Int
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
