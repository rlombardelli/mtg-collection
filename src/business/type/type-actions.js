import {createAction} from 'redux-act';

export const fetchTypesSuccess = createAction('type.fetchSuccess');

export const fetchTypes = () => dispatch =>
  fetch('https://api.magicthegathering.io/v1/types')
    .then(response => response.ok && response.json())
    .then(({types}) => {
      return dispatch(fetchTypesSuccess(types)) && types;
    });
