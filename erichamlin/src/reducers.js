import { combineReducers } from 'redux'
import { SWITCH_PAGE } from "./actions.js";

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


const reducers = combineReducers({
  switchPage
});

export default reducers;
