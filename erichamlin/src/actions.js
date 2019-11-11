import store from './store.js';

export const SWITCH_PAGE = 'SWITCH_PAGE';
export const STORE_PIECES = 'STORE_PIECES';

function switchPageAction(page) {
  return {
    type: SWITCH_PAGE,
    page: page
  }
}

export function switchPageActionWithDispatch(page) {
  store.dispatch(switchPageAction(page));
};


function storePiecesAction(pieces) {
  return {
    type: STORE_PIECES,
    pieces: pieces
  }
}

export function storePiecesActionWithDispatch(pieces) {
  store.dispatch(storePiecesAction(pieces));
}

