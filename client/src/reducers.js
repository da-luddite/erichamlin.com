import { combineReducers } from 'redux'

import {
  SWITCH_PAGE,
  STORE_PIECES,
  STORE_CATEGORIES,
  storeCategoriesActionWithDispatch
} from "./actions.js";

import { queryCategories } from './queries.js'

const initialState = {page: 'new', categories: {}};

function switchPage(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  if (action.type === SWITCH_PAGE) {
    console.log("switching to " + action.page);

    if (action.page == "categories") {
      queryCategories().then(function (response) {
        storeCategoriesActionWithDispatch(response.categories);
      }).catch(function (error) {
        console.log(error)
      });
    }

    return Object.assign({}, state, {
      page: action.page
    })
  }
  else {
    return state;
  }
}


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
    //categoryIndex.sort((a,b) => {
    //  // TODO
    //  return state.categories[pieces[a].category] - state.categories[pieces[b].category];
    //});
    //
    //for (let x in categoryIndex) {
    //  console.log(pieces[categoryIndex[x]].category);
    //}

    console.error(dateIndex);

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

function storeCategories(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  if (action.type = STORE_CATEGORIES) {
    console.log("storing categories");

    return Object.assign({}, state, {
      categories: action.categories
    })

  } else {
    return state;
  }
}


const reducers = combineReducers({
  switchPage,
  storePieces,
  storeCategories
});


export default reducers;
