import store from './store.js';

export const SWITCH_PAGE = 'SWITCH_PAGE';
export const STORE_PIECES = 'STORE_PIECES';
export const STORE_CATEGORIES = 'STORE_CATEGORIES';

function switchPageAction(page) {
  return {
    type: SWITCH_PAGE,
    page: page
  }
}

export function switchPageActionWithDispatch(page) {
  store.dispatch(switchPageAction(page));
}


function storePiecesAction(pieces) {
  return {
    type: STORE_PIECES,
    pieces: pieces
  }
}

export function storePiecesActionWithDispatch(pieces) {
  store.dispatch(storePiecesAction(pieces));
}

function storeCategoriesAction(categories) {
  return {
    type: STORE_CATEGORIES,
    categories: categories
  }
}

export function storeCategoriesActionWithDispatch(categories) {
  store.dispatch(storeCategoriesAction(categories));
}
