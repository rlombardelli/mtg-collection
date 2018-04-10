import {createReducer} from 'redux-act';

import {
  addCardToCollection,
  removeCardFromCollection
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
  [removeCardFromCollection]: (state, cardId) => ({
    cards: state.cards.reduce((cards, card) => {
      if (card.id !== cardId) {
        cards.push(card);
      } else if (card.amount > 1) {
        cards.push({
          ...card,
          amount: card.amount - 1
        });
      }
      return cards;
    }, [])
  })
}, initialState);
