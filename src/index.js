import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import cardReducer from 'business/card/card-reducer';
import cardListReducer from 'business/card-list/card-list-reducer';
import editionReducer from 'business/edition/edition-reducer';
import typeReducer from 'business/type/type-reducer';
import collectionReducer from 'business/collection/collection-reducer';
import fastSearchReducer from 'business/fast-search/fast-search-reducer';
import Header from 'components/header';

import 'normalize.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
  compose;

const store = createStore(combineReducers({
  card: cardReducer,
  cardList: cardListReducer,
  edition: editionReducer,
  type: typeReducer,
  collection: collectionReducer,
  fastSearch: fastSearchReducer,
}), composeEnhancer(applyMiddleware(thunk)));

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
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
