import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCardsInCollection} from 'business/collection/collection-service';
import {removeCardFromCollection} from 'business/collection/collection-actions';

import Card from 'components/card';
import FastSearch from 'components/fast-search';
import styles from './collection.css';

class Collection extends Component {
  removeCard(cardId) {
    this.props.dispatch(removeCardFromCollection(cardId));
  }

  renderCards() {
    if (this.props.cards.length === 0) {
      return <h2>No card in your collection yet!</h2>;
    }

    return [...this.props.cards].map(card =>
      <div className={styles.card}>
        <Card id={card.id} amount={card.amount} />
        <div className={styles.cardHover}>
          <a onClick={() => this.removeCard(card.id)}>Remove card from Collection</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <FastSearch />
        <h1 className={styles.title}>Collection</h1>
        <div className={styles.list}>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  cards: getCardsInCollection(state),
}))(Collection);
