import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { storePiecesActionWithDispatch } from "./actions.js";
import { queryAllPieces } from './queries.js';

import App from './components/App';


queryAllPieces().then(async (response) => {
  storePiecesActionWithDispatch(await response.json());
}).catch((error) => {
  console.log(error)
});

ReactDOM.render(

    <App />
  ,
  document.getElementById('app')
);
