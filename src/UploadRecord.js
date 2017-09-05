import React, {Component} from 'react';
import {BaseCard} from './MyTunes';
import RecordDialog from './RecordDialog';

class UploadRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecord: false,
      recordedBlob: {
        blobURL: undefined
      }
    }
  }

  newRecord = () => {
    this.setState({showRecord:true})
  }

  getRecordDialog = () => (
    <RecordDialog
      onRequestClose={this.getFile}
      open={this.state.showRecord}
    />
  )

  getFile = (audioFile) => {
    if (audioFile) {
      console.log('got audio', audioFile)
    }
    else {
      console.log('no recording')
    }

    this.setState({showRecord: false})
  }

  render() {
    return (
      <div>
        {this.getRecordDialog()}
        <BaseCard message="Record a tune to start the jam"
                  action={[
                    {message: 'Record a new tune', click: this.newRecord},
                  ]}/>
      </div>
    )
  }
}

export default UploadRecord