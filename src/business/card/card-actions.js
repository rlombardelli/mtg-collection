import {createAction} from 'redux-act';

export const fetchCardsSuccess = createAction('card.fetchSuccess');

export const fetchCards = (params = {}) => dispatch => {
  const getParamsString = Object.keys(params)
    .reduce((paramsArray, paramKey) => {
      Boolean(params) && paramsArray.push(`${paramKey}=${params[paramKey]}`);
      return paramsArray;
    }, [])
    .join('&');

  return fetch(`https://api.magicthegathering.io/v1/cards?${getParamsString}`)
    .then(response => response.ok && response.json())
    .then(({cards}) => dispatch(fetchCardsSuccess(cards)) && cards);
};
