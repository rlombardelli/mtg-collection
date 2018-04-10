import {createReducer} from 'redux-act';

import {
  addCardToCollection
} from './collection-actions';

const initialState = {
  cardIds: []
};

export default createReducer({
  [addCardToCollection]: (state, cardId) => {
    const cardIds = [...state.cardIds, cardId];
    return {
      cardIds: cardIds
    };
  },
}, initialState);
