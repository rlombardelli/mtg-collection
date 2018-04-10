import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCardsInCollection} from 'business/collection/collection-service';
import Card from 'components/card';

import styles from './collection.css';

class Collection extends Component {
  renderCards() {
    if (this.props.cards.length === 0) {
      return <h2>No card in your collection yet!</h2>;
    }
    return [...this.props.cards].map(card =>
      <Card id={card.id} amount={card.amount} />
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
