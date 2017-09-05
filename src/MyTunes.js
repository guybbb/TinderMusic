import React, {Component} from 'react'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import ReactAudioPlayer from 'react-audio-player';
import RecordDialog from './RecordDialog'
import {SERVER_HOST} from './config'

const myTunes = [{
  name:        'Eyal',
  url:         'https://ccrma.stanford.edu/~jos/wav/shakuhachi.wav',
  description: 'Me playing. any ideas what to add?',
  cover:       '//lorempixel.com/200/200/'
}, {
    name:        'Amily',
    description: 'Hi guys, who wants to work with me on my song???',
    url:         'http://mojokid.com/Amily/Amily.wav',
    cover:       '//lorempixel.com/200/201/'
}, {
  name:        'Guy',
  description: 'this is my cool tune.',
    url:         'https://ccrma.stanford.edu/~jos/wav/pno-cs.wav',
    cover:       '//lorempixel.com/200/202/'
}]

const styles = {
  card:  {
    width:    '100vw',
    minWidth: 200,
  },
  media: {
    minHeight: 200,
    height:    '50vh',
  },
  title: {
    marginBottom: 16,
    fontSize:     20,
  },
};


const TuneCard = (props) => (
  <Card className={props.classes.card}>
    <CardMedia
      className={props.classes.media}
        //image="//lorempixel.com/200/200/"
      image={props.cover}
      title="Contemplative Reptile"
    />`
    <CardContent>
      <Typography type="headline" component="h2">
        {props.name}
      </Typography>
      <Typography component="p">
        {props.description}
      </Typography>
      <ReactAudioPlayer src={props.url} controls/>
    </CardContent>
    <CardActions>
      <Button onClick={props.record} dense color="primary">
        Record Response
      </Button>
      <Button dense color="primary">
        Upload Response
      </Button>
      <Button onClick={props.skip} dense color="primary">
        Skip
      </Button>
    </CardActions>
  </Card>
)

export const BaseCard = ({classes=styles, message, action}) => (
  <div>
    <Card className={classes.card}>
      <CardContent>
        <Typography type="headline" className={classes.title}>
          {message}
        </Typography>
      </CardContent>
      {action ?
        <CardActions>
          {action.map(action => (
            <Button onClick={action.click} dense color="primary">
              {action.message}
            </Button>))}
        </CardActions>
        : null}
    </Card>
  </div>
)

class MyTunes extends Component {
  constructor(props) {
    super(props)
    this.state = {myTunes, index: 0, showRecord: false};
  }

  nextTunes = () => {
    console.log('nextTune', this.setState, this.state.index++)
    this.setState({index: this.state.index++})
  }

  newRecord = () => {
    this.setState({showRecord: true})
  }

  getFile = (audioFile) => {
    if (audioFile) {
      console.log('got audio', audioFile)
    }
    else {
      console.log('no recording')
    }

    this.setState({showRecord: false})
  }

  getRecordDialog = () => (
    <RecordDialog
      onRequestClose={this.getFile}
      open={this.state.showRecord}
    />
  )

  render() {
    const classes = this.props.classes;
    return !myTunes[this.state.index] ?
      <div>
        {this.getRecordDialog()}
        <BaseCard message="No more tunes... comeback later! :)" classes={classes}
                  action={[
                    {message: 'Record a new tune', click: this.newRecord},
                  ]}/>
      </div>
      :
      <div>
        {this.getRecordDialog()}
        <TuneCard {...myTunes[this.state.index]} classes={classes}
                  skip={this.nextTunes}
                  record={this.newRecord}/>
      </div>
  }
}

export default withStyles(styles)(MyTunes)