import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCardsInCollection} from 'business/collection/collection-service';
import Card from 'components/card';

import styles from './collection.css';

class Collection extends Component {
  renderCards() {
    if (this.props.cardIds.length === 0) {
      return <h2>No card in your collection yet!</h2>;
    }
    return [...this.props.cardIds].map(cardId =>
      <Card id={cardId} />
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
  cardIds: getCardsInCollection(state),
}))(Collection);
