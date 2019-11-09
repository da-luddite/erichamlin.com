import { combineReducers } from 'redux'


function switchPage(state, action) {
  if (action.type === SWITCH_PAGE) {
  }
  else {
    return state;
  }
}


const reducers = combineReducers({
  switchPage
});

export default reducers;
