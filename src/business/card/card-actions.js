import {createAction} from 'redux-act';

export const fetchCardsSuccess = createAction('cards.fetchSuccess');

export const fetchCards = () => dispatch => {
  console.log('hello');
  fetch('https://api.magicthegathering.io/v1/cards?name=narset')
    .then(response => response.ok && response.json())
    .then(({cards}) => dispatch(fetchCardsSuccess(cards)) && cards);
};
