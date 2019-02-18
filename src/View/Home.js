import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Contoh from '../Component/Contoh';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      text:undefined
    }
  }
  
  render() {
    return (
      <div>
        <h1>Haloo gays😍</h1>
        <Link to="/about">
        <Button variant="contained" color="primary">Klik aku dong</Button>
        </Link>
        <input onChange={input=>this.setState({text:input.target.value})} send={this.state.text}>
        </input>
        <Contoh></Contoh>
      </div>
    )
  }
}
