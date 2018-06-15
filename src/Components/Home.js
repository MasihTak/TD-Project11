import React, { Component } from 'react';
import axios from 'axios';
import { RingLoader } from 'react-spinners';
import SearchForm from './SearchForm';
import Categories from './Categories';
import PhotoList from './PhotoList';

require('dotenv').config()

// Get Flicker api from .env file and assign it to apiKey
const apiKey = process.env.REACT_APP_API;

// List of categories
const categories = [
  {
    name: 'Whales'
  },
  {
    name: 'Dogs'
  },
  {
    name: 'Computers'
  }
];

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      keyword: '',
      loading: true
    }
  }

  componentDidMount() {
    if(this.props.history !== undefined) {
      this.props.history.push('/search/love');
    }
    this.performSearch();
  }


  performSearch = (keyword = this.props.keyword || "love") => {

    // for every search, reset loading and keyword states
    this.setState({
      loading: true,
      keyword: keyword
    });

    // Fetch the data from Flickr API using axios
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=20&format=json&nojsoncallback=1`)
    .then(response => {this.setState({
      photos: response.data.photos.photo,
      loading: false
    });
   })
   .catch(error => {
     console.log('Error featching and parsing data', error);
   });
   this.keyword = keyword;
  }

  // Update the state regarding new keyword
  componentDidUpdate(prevProps) {
    if (this.props.keyword !== prevProps.keyword) {
      this.performSearch();
    }
  }


  render() {
    return (
      <div className="container">

        <SearchForm onSearch={this.performSearch} history={this.props.history} />
        <Categories categories={categories} />
        {(this.state.loading) ? <RingLoader
          color={'#123abc'}
          size={150}
          loading={this.state.loading}
        /> : <PhotoList data={this.state.photos} loading={this.state.loading} query={this.props.keyword} />}

      </div>
    );
  }
}

export {categories};
