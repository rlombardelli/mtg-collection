import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import CardList from 'components/card-list';
import Collection from 'components/collection';
import styles from './header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.link}><Link to="/">Card List</Link></div>
          <div className={styles.link}><Link to="/collection">Collection</Link></div>
        </div>
        <Route exact path="/" component={CardList}/>
        <Route exact path="/collection" component={Collection}/>
      </div>
    );
  }
}
