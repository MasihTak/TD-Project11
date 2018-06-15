import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Categories extends Component {

  render() {
    return (
      <nav className="main-nav">
        <ul>
          {/* Get list of categories and map through them */}
          {this.props.categories.map((category, index) =>
            <li key={index}><Link to={category.name.toLowerCase()}>{category.name}</Link></li>
          )}
        </ul>
      </nav>
    );
  }
}

// Validate categories to ensure following the expected shape
Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired
}
