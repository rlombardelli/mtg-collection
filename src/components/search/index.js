import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchCards, updateSearchParam} from 'business/card-list/card-list-actions';
import {getSearchParams} from 'business/card-list/card-list-service';
import {getEditions} from 'business/edition/edition-service';
import {getTypes} from 'business/type/type-service';

import styles from './search.css';

class Search extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(fetchCards(this.props.searchParams));
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.props.dispatch(updateSearchParam({
      [name]: value
    }));
  }

  renderEditions() {
    return Object.values(this.props.editions).map(edition =>
      <option value={edition.code}>{edition.name}</option>
    );
  }

  renderTypes() {
    return this.props.types.map(type =>
      <option value={type}>{type}</option>
    );
  }

  render() {
    const searchParams = this.props.searchParams || {};

    return (
      <div className={styles.search}>
        <form action="javascript:void(0);" onSubmit={this.handleSubmit}>
          <select name="set" value={searchParams.set} onChange={this.handleInputChange}>
            <option value="">All Sets</option>
            {this.renderEditions()}
          </select>
          <input name="name" value={searchParams.name} onChange={this.handleInputChange} placeholder="Name" />
          <input name="colorIdentity" value={searchParams.colorIdentity} placeholder="Colors" onChange={this.handleInputChange} />
          <input name="cmc" value={searchParams.cmc} placeholder="CMC" onChange={this.handleInputChange} />
          <select name="types" value={searchParams.types} onChange={this.handleInputChange}>
            <option value="">All Types</option>
            {this.renderTypes()}
          </select>
          <input name="subtypes" value={searchParams.subtypes} placeholder="subtypes" onChange={this.handleInputChange} />
          <select name="rarity" value={searchParams.rarity} onChange={this.handleInputChange}>
            <option value="">All Rarities</option>
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="Mythic Rare">Mythic Rare</option>
            <option value="Special">Special</option>
            <option value="Basic Land">Basic Land</option>
          </select>
          <select name="gameFormat" value={searchParams.gameFormat} onChange={this.handleInputChange}>
            <option value="">All Formats</option>
            <option value="Standard">Standard</option>
            <option value="Modern">Modern</option>
            <option value="Legacy">Legacy</option>
            <option value="Vintage">Vintage</option>
            <option value="Commander">Commander</option>
          </select>
          <input type="submit" value="Search" className={styles.searchCta} />
        </form>
      </div>
    );
  }
}

export default connect(state => ({
  searchParams: getSearchParams(state),
  editions: getEditions(state),
  types: getTypes(state)
}))(Search);
