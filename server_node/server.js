let express = require('express');
let config = require('./config');
var cors = require('cors');
let express_graphql = require('express-graphql');
let schema = require('./schema').default;
let allPieces = require('./allPieces');
let categories = require('./categories');

// Root resolver
let root = {
  piece: (args) => allPieces[args.id],
  pieces: () => allPieces,
  categories: () => categories
};

// Create an express server and a GraphQL endpoint
let app = express();
app.use(cors());
app.use(express.static('.'));
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
