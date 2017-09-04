import React, {Component} from 'react';
import {Button} from 'material-ui';
import {withStyles} from 'material-ui/styles';
import {ReactMic} from 'react-mic';
import ReactAudioPlayer from 'react-audio-player';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input:  {
    display: 'none',
  },
});


class UploadRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }

  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onStop(recordedBlob) {
    this.setState({audioFile: recordedBlob.blobURL})
    console.log('recordedBlob is: ', recordedBlob);
  }
  
  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop.bind(this)}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <input accept="jpg,jpeg,JPG,JPEG" className={this.props.classes.input} id="file" multiple type="file"/>
        <label htmlFor="file">
          <Button raised component="span" className={this.props.classes.button}>
            Upload
          </Button>
          <ReactAudioPlayer
            src={this.state.audioFile}
            controls
          />
          <button onClick={this.startRecording} type="button">Start</button>
          <button onClick={this.stopRecording} type="button">Stop</button>
        </label>
      </div>
    )
  }
}

export default withStyles(styles)(UploadRecord)