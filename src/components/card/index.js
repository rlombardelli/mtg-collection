import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCard} from 'business/card/card-service';
import styles from './card.css';

class Card extends Component {

  getStyle(hasImageUrl) {
    return hasImageUrl && {
      backgroundImage: `url('${this.props.card.imageUrl}')`
    };
  }

  render() {
    if (!this.props.card) {
      return (
        <div className={styles.card}>
          <div className={styles.content}>
            Loading
          </div>
        </div>
      );
    }

    const hasImageUrl = this.props.card.imageUrl;

    return (
      <div className={styles.card} style={this.getStyle(hasImageUrl)}>
        {!hasImageUrl &&
          <div className={styles.content}>
            <div>{this.props.card.name}</div>
            <div>{this.props.card.text}</div>
          </div>
        }
        {this.props.amount && this.props.amount > 1 &&
          <div className={styles.amount}>x{this.props.amount}</div>
        }
      </div>
    );
  }
}

export default connect((state, props) => ({
  card: getCard(state, props.id)
}))(Card);
