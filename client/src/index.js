import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { storePiecesActionWithDispatch } from "./actions.js";
import { queryAllPieces } from './queries.js';

import App from './components/App';


queryAllPieces().then(function (response) {
  console.error(response)
  storePiecesActionWithDispatch(response.pieces);
}).catch(function (error) {
  // response is originally response.errors of query result
  console.log(error)
});

ReactDOM.render(

    <App />
  ,
  document.getElementById('root')
);
