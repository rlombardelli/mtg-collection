import {createReducer} from 'redux-act';

import {
  fetchTypesSuccess
} from './type-actions';

const initialState = {
  types: []
};

export default createReducer({
  [fetchTypesSuccess]: (state, fetchedTypes) => {
    return {
      ...state,
      types: fetchedTypes
    };
  }
}, initialState);
