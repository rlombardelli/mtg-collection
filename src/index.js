import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import cardReducer from 'business/card/card-reducer';
import cardListReducer from 'business/card-list/card-list-reducer';
import editionReducer from 'business/edition/edition-reducer';
import typeReducer from 'business/type/type-reducer';
import CardList from 'components/card-list';

import 'normalize.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
  compose;

const store = createStore(combineReducers({
  card: cardReducer,
  cardList: cardListReducer,
  edition: editionReducer,
  type: typeReducer
}), composeEnhancer(applyMiddleware(thunk)));

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <CardList />
      </Provider>
    </AppContainer>
  ), document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept('./components/card-list', () => {
    const NextRootContainer = require('./components/card-list').default;
    render(NextRootContainer);
  });
}
