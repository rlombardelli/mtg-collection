import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCards, getPage} from 'business/card-list/card-list-service';
import {fetchCards} from 'business/card-list/card-list-actions';

import Card from 'components/card';

import styles from './card-list.css';

class Viewer extends Component {
  renderCards() {
    return [...this.props.cardIds].map(cardId =>
      <a onDoubleClick={() => this.addCardToDeck(cardId)} key={cardId} className={styles.card}>
        <Card id={cardId} />
      </a>
    );
  }

  render() {
    return (
      <div className={styles.cardlist}>
        <div className={styles.list}>
          {this.renderCards()}
        </div>
      </div>
    );
  }

  componentWillMount() {
    this.props.dispatch(fetchCards());
  }
}


export default connect(state => ({
  cardIds: getCards(state),
  page: getPage(state)
}))(Viewer);
