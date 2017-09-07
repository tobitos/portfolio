import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './containers/Navbar';
import HomePage from './containers/HomePage';
import NotFound from './containers/NotFoundPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
