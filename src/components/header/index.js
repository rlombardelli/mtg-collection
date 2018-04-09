import React, {Component} from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';

import CardList from 'components/card-list';
import Collection from 'components/collection';
import styles from './header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.link}><NavLink to="/card-list" activeStyle={{color: 'cadetblue'}}>Card List</NavLink></div>
          <div className={styles.link}><NavLink to="/collection" activeStyle={{color: 'cadetblue'}}>Collection</NavLink></div>
        </div>
        <Route exact path="/card-list" component={CardList}/>
        <Route exact path="/collection" component={Collection}/>
        <Redirect from="/" to="/card-list" />
      </div>
    );
  }
}
