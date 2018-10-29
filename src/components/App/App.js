import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import HomeContainer from '../../Views/Home/HomeContainer'
import CategoryContainer from '../../Views/Category/CategoryContainer'
import GameOverContainer from '../../Views/GameOver/GameOverContainer';
class App extends Component{
  render(){
    return(
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/categories/:name" component={CategoryContainer}/>
            <Route exact path="/gameover" component={GameOverContainer}/>
          </div>
        </Router>
      </div>
    )
  }
}
export default App;