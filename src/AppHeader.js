import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';

import './App.css';
import {Toolbar, Typography} from 'material-ui';

const styles = {
  root: {
    marginTop: 30,
    width: '100%',
  },
};

class AppHeader extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            PickATune
          </Typography>
        </Toolbar>
      </AppBar>

    );
  }
}

export default withStyles(styles)(AppHeader);
