import React, { Component } from 'react';
import { withRouter } from 'react-router';
import icon from '../icon.svg';

class SearchForm extends Component {

  state = {
    searchText: ''
  }

  //Set state when search input changes
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const query = this.query.value;
    this.props.onSearch(query);
    let path = `/search/${query}`;
    e.currentTarget.reset();
    this.props.history.push(path);
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="search" name="search" onChange={this.onSearchChange} ref={ (input) => this.query = input} placeholder="Search" required />
        <button type="submit" className="search-button">
          <img src={icon} alt="Search Icon" />
        </button>
      </form>
    );
  }
}

// https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(SearchForm);
