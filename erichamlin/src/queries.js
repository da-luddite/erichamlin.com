import graphql from 'graphql.js';

const graph = graphql("http://localhost:4000/graphql", {});

const allPiecesQuery = `
  query {
    pieces {
      pieceId
      title
      description
      dimensions
      media
      dateCreated
      category
      thumbnail { 
        url 
      }
      images {
        url 
        description
      }
    }
  }
`;

export function queryAllPieces() {
  return graph.query.run(allPiecesQuery);
}

