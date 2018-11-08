import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
        <div className="search">
        <input type="text" />
        <button type="button">Search</button>
        <button type="button">+</button>
      </div>
    );
  }
}

export default Search;
