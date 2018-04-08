import {createAction} from 'redux-act';

export const fetchCardsSuccess = createAction('card.fetchSuccess');

export const fetchCards = (params = {}, page = 1) => dispatch => {

  const concatParams = {
    ...params,
    ...{page}
  };

  const getParamsString = Object.keys(concatParams)
    .reduce((paramsArray, paramKey) => {
      Boolean(concatParams) && paramsArray.push(`${paramKey}=${concatParams[paramKey]}`);
      return paramsArray;
    }, [])
    .join('&');

  return fetch(`https://api.magicthegathering.io/v1/cards?${getParamsString}`)
    .then(response => response.ok && response.json())
    .then(({cards}) => dispatch(fetchCardsSuccess(cards)) && cards);
};
