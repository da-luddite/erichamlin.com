import graphql from 'graphql.js';

const graph = graphql("http://localhost:4000/graphql", {});

const allPiecesQuery = `
  query {
    pieces {
      project {
        title
      }
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

const categoriesQuery = `
  query {
    categories {
      categoryId
      categoryName
      categoryOrder
    }
  }
`;

export function queryAllPieces() {
  return graph.query.run(allPiecesQuery);
}

export function queryCategories() {
  return graph.query.run(categoriesQuery)
}

