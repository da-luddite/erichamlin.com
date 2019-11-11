import graphql from 'graphql.js';

const graph = graphql("http://localhost:4000/graphql", {});

const allPiecesQuery = `
  query {
    pieces {
      title
      description
      date
      dimensions
      media
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

