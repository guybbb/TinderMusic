import React from 'react';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog, {DialogTitle} from 'material-ui/Dialog';
import blue from 'material-ui/colors/blue';
import {ReactMic} from 'react-mic';
import ReactAudioPlayer from 'react-audio-player';
import {SERVER_HOST} from './config';

const styles = {
  avatar: {
    background: blue[100],
    color:      blue[600],
  },
};

class RecordDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {record: false}
  }



  //sendResponseToServer = () => {
  //  return fetch(`${SERVER_HOST}/Tunes`, {
  //    method:  'post',
  //    body:    `userId=1&soundFile=${this.state.audioBase}&connectionId=-1`,
  //    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  //    mode:'no-cors'
  //  })
  //}

    handleRequestClose = () => 
    {
        this.props.onRequestClose();
    }

  //handleRequestClose = () => {
  //  this.setState({record: false, recordedBlob: null});
  //  this.sendResponseToServer().then(res => {
  //    if (res.ok) {
  //      this.props.onRequestClose(this.state.recordedBlob);
  //    }
  //    else {
  //      this.setState({status: 'Upload Failed :('})
  //    }
  //  });

  //};

  onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    const reader = new window.FileReader();
    reader.readAsDataURL(recordedBlob.blob);
    reader.onloadend = () => {
      this.setState({audioBase: reader.result})
    }
    this.setState({recordedBlob})
  }

  startRecording = () => {
    this.setState({record: true})
  }

  stopRecording = () => {
    this.setState({record: false})
  }

  render() {
    const {classes, onRequestClose, selectedValue, ...other} = this.props;

    return (
      <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>Record New Audio</DialogTitle>
        <div>
          {this.state.status ? <div>{this.state.status}</div> : null}
          {this.state.recordedBlob ? <ReactAudioPlayer
            src={this.state.recordedBlob ? this.state.recordedBlob.blobURL : null}
            controls
          /> : null}
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            strokeColor="#000000"
            backgroundColor="#ffffff"/>
          <Button onClick={this.startRecording} dense color="primary" disabled={this.state.record}>
            Record
          </Button>
          <Button onClick={this.stopRecording} dense color="primary" disabled={!this.state.record}>
            Stop
          </Button>
          <Button onClick={this.handleRequestClose} dense color="primary">
            {this.state.recordedBlob ? 'Share' : 'Close'}
          </Button>
        </div>
      </Dialog>
    );
  }
}

const RecordDialogWrapped = withStyles(styles)(RecordDialog);

export default RecordDialogWrapped