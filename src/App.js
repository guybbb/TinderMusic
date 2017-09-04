import React, {Component} from 'react';
import './App.css';
import AppHeader from './AppHeader';
import UploadRecord from './UploadRecord';
import MyTunes from './MyTunes';


class App extends Component {
  render() {
    return (
      <div>
        <AppHeader/>
        {/*<UploadRecord/>*/}
        <MyTunes />
      </div>
    );
  }
}

export default App;
