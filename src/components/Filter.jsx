import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;

    return (
      <input type="text" value={filter} onChange={(e) => onFilterChange(e.target.value)} placeholder="Search contacts" />
    );
  }
}

export default Filter;
