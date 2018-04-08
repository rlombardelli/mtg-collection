import {createReducer} from 'redux-act';

import {
  fetchCardsSuccess
} from './card-list-actions';

const initialState = {
  cardIds: new Set(),
  page: 1
};

export default createReducer({
  [fetchCardsSuccess]: (state, {cardIds, page}) => ({
    ...state,
    cardIds: page !== 1 ? new Set([
      ...Array.from(state.cardIds),
      ...cardIds
    ]) : new Set(cardIds),
    page
  })
}, initialState);
