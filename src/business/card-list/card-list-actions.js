import {createAction} from 'redux-act';

import * as cardActions from 'business/card/card-actions';

export const updateSearchParam = createAction('cardList.updateSearchParam');

export const fetchCardsSuccess = createAction('cardList.fetchSuccess');

export const fetchCards = (params, page = 1) => dispatch =>
  dispatch(cardActions.fetchCards(params, page))
    .then(cards => dispatch(fetchCardsSuccess({
      cardIds: Object.keys(cards).map(index => cards[index].id),
      page
    })));
