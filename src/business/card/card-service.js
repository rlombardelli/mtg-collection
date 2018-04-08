export function getCards(state) {
  return state.cards.map;
}

export function getCard(state, id) {
  return state.cards.map[id];
}
