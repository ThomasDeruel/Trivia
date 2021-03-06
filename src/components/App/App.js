
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from '../../Views/Home/HomeContainer';
import CategoryContainer from '../../Views/Category/CategoryContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/categories/:id" component={CategoryContainer} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;