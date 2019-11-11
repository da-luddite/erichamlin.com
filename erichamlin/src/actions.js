export const SWITCH_PAGE = 'SWITCH_PAGE';
export const STORE_PIECES = 'STORE_PIECES';

export function switchPageAction(page) {
  return {
    type: SWITCH_PAGE,
    page: page
  }
}

export function storePiecesAction(pieces) {
  return {
    type: STORE_PIECES,
    pieces: pieces
  }
}
