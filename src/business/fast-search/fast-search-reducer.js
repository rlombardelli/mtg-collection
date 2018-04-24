import {createReducer} from 'redux-act';

import {
  fetchCardsSuccess,
  updateName
} from './fast-search-actions';

const initialState = {
  name: '',
  cards: []
};

export default createReducer({
  [fetchCardsSuccess]: (state, fetchedCards) => {
    return {
      ...state,
      cards: fetchedCards
    };
  },
  [updateName]: (state, newName) => {
    return {
      ...state,
      name: newName
    };
  }
}, initialState);
