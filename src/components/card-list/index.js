import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCards, getSearchParams, getPage, getHasMoreResult} from 'business/card-list/card-list-service';
import {fetchCards} from 'business/card-list/card-list-actions';
import {fetchEditions} from 'business/edition/edition-actions';
import {fetchTypes} from 'business/type/type-actions';
import {addCardToCollection} from 'business/collection/collection-actions';

import Card from 'components/card';
import Search from 'components/search';

import styles from './card-list.css';

class CardList extends Component {

  addCard = cardId => {
    this.props.dispatch(addCardToCollection(cardId));
  }

  loadNextPage = () => {
    this.props.dispatch(fetchCards(this.props.searchParams, this.props.page + 1));
  };

  renderCards() {
    if (this.props.cardIds.size === 0) {
      return <h2>No results</h2>;
    }
    return [...this.props.cardIds].map(cardId =>
      <div className={styles.card}>
        <Card id={cardId} />
        <div className={styles.cardHover}>
          <a onClick={() => this.addCard(cardId)}>Add card to Collection</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.cardList}>
        <h1>Card List</h1>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.list}>
          {this.renderCards()}
        </div>
        {this.props.hasMoreResult === false &&
          <div className={styles.loadMore}>
            <button className={styles.loadMoreCta} onClick={this.loadNextPage} >Load more cards</button>
          </div>
        }
      </div>
    );
  }

  componentWillMount() {
    this.props.dispatch(fetchCards());
    this.props.dispatch(fetchEditions());
    this.props.dispatch(fetchTypes());
  }
}

export default connect(state => ({
  cardIds: getCards(state),
  searchParams: getSearchParams(state),
  page: getPage(state),
  hasMoreResult: getHasMoreResult(state),
}))(CardList);
