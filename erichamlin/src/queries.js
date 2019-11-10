import graphql from 'graphql.js';


var graph = graphql("http://localhost:4000/graphql", {});

const Q = `
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

graph.query.run(Q).then(function (response) {
  // response is originally response.data of query result
  console.log(response)
}).catch(function (error) {
  // response is originally response.errors of query result
  console.log(error)
});
