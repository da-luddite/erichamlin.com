import { combineReducers } from 'redux'

import { SWITCH_PAGE, STORE_PIECES } from "./actions.js";

const initialState = {page: 'new'};

function switchPage(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  if (action.type === SWITCH_PAGE) {
    console.log("switching to " + action.page);
    return Object.assign({}, state, {
      page: action.page
    })
  }
  else {
    return state;
  }
}

// TODO
const categories = {
  'new': 0,
  'concept': 1,
  'storyboard': 2,
  'illustration': 3,
  'interactive': 4,
  'comix': 5,
  'other': 6
};

function storePieces(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  if (action.type === STORE_PIECES) {
    console.log("storing pieces");

    const pieces = [];
    action.pieces.forEach((currentValue) => {
      pieces[currentValue.pieceId] = currentValue;
    });

    let dateIndex = pieces.map((currentValue) => currentValue.pieceId);
    dateIndex.sort((a,b) => {
      return pieces[b].dateCreated - pieces[a].dateCreated;
    });

    let categoryIndex = pieces.map((currentValue) => currentValue.pieceId);
    categoryIndex.sort((a,b) => {
      // TODO
      return categories[pieces[a].category] - categories[pieces[b].category];
    });

    for (let x in categoryIndex) {
      console.log(pieces[categoryIndex[x]].category);
    }

    return Object.assign({}, state, {
      pieces: pieces,
      dateIndex: dateIndex,
      categoryIndex: categoryIndex
    })
  }
  else {
    return state;
  }
}


const reducers = combineReducers({
  switchPage,
  storePieces
});


export default reducers;
