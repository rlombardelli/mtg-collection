import {createReducer} from 'redux-act';

import {
  fetchEditionsSuccess
} from './edition-actions';

const initialState = {
  map: {}
};

export default createReducer({
  [fetchEditionsSuccess]: (state, editions) => {
    return {
      ...state,
      map: {
        ...state.map,
        ...editions.reduce((editionsMap, edition) => {
          editionsMap[edition.code] = edition;
          return editionsMap;
        }, {})
      }
    };
  }
}, initialState);
