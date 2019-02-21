import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './style.css';

const styles = {
  Toolbar:{
    height: 10,
    width:'10%',
  }
}
export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar style={styles.Toolbar}>
            <Link to="/" className="under">
            <Typography className="Text">
              <p>Home</p>
            </Typography>
            </Link>
            <Link to="/" className="under">
            <Typography className="Text">
              <p>About</p>
            </Typography>
            </Link>
            <Link to="/" className="under">
            <Typography className="Text">
              <p>Timeline</p>
            </Typography>
            </Link>
            <Link to="/" className="under">
            <Typography className="Text">
              <p>Login</p>
            </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
