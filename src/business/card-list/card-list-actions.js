import {createAction} from 'redux-act';

import * as cardActions from 'business/card/card-actions';

export const fetchCardsSuccess = createAction('viewer.fetchSuccess');

export const fetchCards = (page = 1) => dispatch =>
  dispatch(cardActions.fetchCards())
    .then(cards => dispatch(fetchCardsSuccess({
      cardIds: Object.keys(cards).map(index => cards[index].id),
      page
    })));
