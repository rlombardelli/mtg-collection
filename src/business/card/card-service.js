export function getCards(state) {
  return state.card.map;
}

export function getCard(state, id) {
  return state.card.map[id];
}
