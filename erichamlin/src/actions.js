export const SWITCH_PAGE = 'SWITCH_PAGE';

export function switchPageAction(page) {
  return {
    type: SWITCH_PAGE,
    page: page
  }
}
