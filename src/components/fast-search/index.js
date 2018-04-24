import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateName, fetchCardsSuccess} from 'business/fast-search/fast-search-actions';
import {fetchCards} from 'business/card/card-actions';
import {addCardToCollection} from 'business/collection/collection-actions';
import {getFastSearchCards, getSearchName} from 'business/fast-search/fast-search-service';
import Card from 'components/card';
import styles from './fast-search.css';

class Collection extends Component {
  handleSubmit = () => {
    const searchParams = {
      name: this.props.searchName
    };
    this.props.dispatch(fetchCards(searchParams))
      .then(cards => this.props.dispatch(fetchCardsSuccess(cards)));
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;

    this.props.dispatch(updateName(value));
  }

  addCard = cardId => {
    this.props.dispatch(addCardToCollection(cardId));
  }

  renderCards() {
    return [...this.props.cards].map(card =>
      <div className={styles.card}>
        <Card id={card.id} />
        <div className={styles.cardHover}>
          <a onClick={() => this.addCard(card.id)}>Add card to Collection</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input name="name" value={this.props.searchName} onChange={this.handleChange} placeholder="Name" />
          <button onClick={() => this.handleSubmit()}>Search</button>
        </div>
        {this.props.cards.length > 0 &&
          <div className={styles.list}>
            {this.renderCards()}
          </div>
        }
      </div>
    );
  }
}

export default connect(state => ({
  cards: getFastSearchCards(state),
  searchName: getSearchName(state),
}))(Collection);
