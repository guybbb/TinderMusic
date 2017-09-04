import React, {Component} from 'react'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';


const myTunes = [{
  name:    'Eyal',
  tuneUrl: 'http://tunemusic'
}, {
  name:    'guy',
  tuneUrl: 'http://tunemusic2'
}]

const styles = {
  card:  {
    width: '100vw',
    minWidth: 200,
  },
  media: {
    minHeight: 200,
    height: '50vh',
  },
};


class MyTunes extends Component {
  constructor(props) {
    super(props)
    this.state = {myTunes};
  }

  render() {
    const classes = this.props.classes;

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography type="headline" component="h2">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              Share
            </Button>
            <Button dense color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(MyTunes)