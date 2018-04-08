import {createAction} from 'redux-act';

export const fetchEditionsSuccess = createAction('edition.fetchSuccess');

export const fetchEditions = () => dispatch =>
  fetch('https://api.magicthegathering.io/v1/sets')
    .then(response => response.ok && response.json())
    .then(({sets}) => {
      const filteredSets = sets.filter(set => set.code.length === 3);
      return dispatch(fetchEditionsSuccess(filteredSets)) && filteredSets;
    });
