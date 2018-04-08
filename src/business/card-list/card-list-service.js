export function getCards(state) {
  return state.cardList.cardIds;
}

export function getSearchParams(state) {
  return state.cardList.searchParams;
}

export function getPage(state) {
  return state.cardList.page;
}

export function getHasMoreResult(state) {
  return state.cardList.hasMoreResult;
}
