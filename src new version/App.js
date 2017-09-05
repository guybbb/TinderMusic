import React, {Component} from 'react';
import './App.css';
import AppHeader from './AppHeader';
import UploadRecord from './UploadRecord';
import MyTunes from './MyTunes';
import Tab from './Tab';


class App extends Component {
  render() {
    return (
      <div>
        <AppHeader/>
        <Tab view={[<UploadRecord/>, <MyTunes/>]} />
      </div>
    );
  }
}

export default App;
