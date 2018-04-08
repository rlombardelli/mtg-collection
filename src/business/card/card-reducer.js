import {createReducer} from 'redux-act';

import {
  fetchCardsSuccess
} from './card-actions';

const initialState = {
  map: {}
};

export default createReducer({
  [fetchCardsSuccess]: (state, cards) => ({
    ...state,
    map: {
      ...state.map,
      ...cards.reduce((cardsMap, card) => {
        cardsMap[card.id] = card;
        return cardsMap;
      }, {})
    }
  })
}, initialState);
