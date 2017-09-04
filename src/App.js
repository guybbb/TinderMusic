import React, {Component} from 'react';
import './App.css';
import AppHeader from './AppHeader';
import UploadRecord from './UploadRecord';


class App extends Component {
  render() {
    return (
      <div>
        <AppHeader/>
        <UploadRecord/>
      </div>
    );
  }
}

export default App;
