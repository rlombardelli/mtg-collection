import {createReducer} from 'redux-act';

import {
  addCardToCollection
} from './collection-actions';

const initialState = {
  cards: []
};

function increaseAmountOfCard(cards, cardId) {
  return cards.map(card => card.id === cardId  ?
    {
      id: card.id,
      amount: card.amount + 1
    } :
    card
  );
}

export default createReducer({
  [addCardToCollection]: (state, cardId) => ({
    cards: state.cards.find(card => card.id === cardId) ?
      increaseAmountOfCard(state.cards, cardId) :
      [
        ...state.cards,
        {id: cardId, amount: 1}
      ]
  }),
}, initialState);
