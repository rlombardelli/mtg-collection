import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCards, getSearchParams, getPage} from 'business/card-list/card-list-service';
import {fetchCards} from 'business/card-list/card-list-actions';

import Card from 'components/card';
import Search from 'components/search';

import styles from './card-list.css';

class CardList extends Component {

  loadNextPage = () => {
    console.log('hello');
    this.props.dispatch(fetchCards(this.props.searchParams, this.props.page + 1));
  };

  renderCards() {
    return [...this.props.cardIds].map(cardId =>
      <Card id={cardId} />
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
        <div className={styles.loadMore}>
          <button className={styles.loadMoreCta} onClick={this.loadNextPage} >Load more cards</button>
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
  searchParams: getSearchParams(state),
  page: getPage(state)
}))(CardList);
