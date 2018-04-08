import {createReducer} from 'redux-act';

import {
  fetchCardsSuccess,
  fetchTypesSuccess,
  updateSearchParam
} from './card-list-actions';

const initialState = {
  cardIds: new Set(),
  searchParams: {
    set: '',
    name: '',
    colorIdentity: '',
    rarity: '',
    cmc: '',
    types: '',
    subtypes: '',
    gameFormat: ''
  },
  page: 1,
  hasMoreResult: false
};

export default createReducer({
  [fetchCardsSuccess]: (state, {cardIds, page}) => ({
    ...state,
    cardIds: page !== 1 ? new Set([
      ...Array.from(state.cardIds),
      ...cardIds
    ]) : new Set(cardIds),
    page,
    hasMoreResult: cardIds.length !== 100
  }),
  [updateSearchParam]: (state, searchParam) => ({
    ...state,
    searchParams: {
      ...state.searchParams,
      ...searchParam
    }
  }),
}, initialState);
