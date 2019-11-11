import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { storePiecesActionWithDispatch } from "./actions.js";
import {queryAllPieces} from './queries.js';




queryAllPieces().then(function (response) {
  // response is originally response.data of query result
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
