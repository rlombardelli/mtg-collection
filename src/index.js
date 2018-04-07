import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import cardReducer from 'business/card/card-reducer';

import Card from 'components/card';

const store = createStore(combineReducers({
  cards: cardReducer
}));

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <Card id={386616} />
      </Provider>
    </AppContainer>
  ), document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept('./components/card', () => {
    const NextRootContainer = require('./components/card').default;
    render(NextRootContainer);
  });
}
