import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { Route, Switch } from 'react-router';
import Home from './View/Home';
import About from './View/About';
import Maungaps from './View/Maungaps';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route component={Maungaps}/>
      </Switch>
        
      </div>
    );
  }
}

export default App;
