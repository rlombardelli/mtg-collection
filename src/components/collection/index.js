import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCardsInCollection} from 'business/collection/collection-service';
import {removeCardFromCollection} from 'business/collection/collection-actions';

import Card from 'components/card';

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
      <a onDoubleClick={() => this.removeCard(card.id)}>
        <Card id={card.id} amount={card.amount} />
      </a>
    );
  }

  render() {
    return (
      <div className={styles.list}>
        {this.renderCards()}
      </div>
    );
  }
}

export default connect(state => ({
  cards: getCardsInCollection(state),
}))(Collection);
