import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './View/Home';
import About from './View/About';
import Navbar from './View/navbar';
import Login from './View/Login';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
      </Switch>
      </div>
    );
  }
}

export default App;
