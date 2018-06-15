import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';

// App components
import Home, {categories}  from './Components/Home';
import NotFound from './NotFound';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/" render={ props => <Home {...props} />} /> {/* Instead of Redirect I used this method for practice */}
          console.log<Route path="/search/:query" render={ props => <Home
                                                            keyword={props.match.params.query}
                                                          />
                                              }
          />
          {/* DRY using a map for Routes */}
          {categories.map((category, i) =>
           <Route key={i} path={`/${category.name.toLowerCase()}`} component={Home} />
          )}

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
