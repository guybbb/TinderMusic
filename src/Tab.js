import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

function TabContainer(props) {
  return <div style={{ paddingTop: 20 }}>{props.children}</div>;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    // marginTop: theme.spacing.unit * 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class BasicTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Record a tune" />
            <Tab label="Send a response (10)" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>{this.props.view[0]}</TabContainer>}
        {value === 1 && <TabContainer>{this.props.view[1]}</TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(BasicTabs);