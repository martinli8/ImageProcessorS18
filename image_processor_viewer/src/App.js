import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import Upload from './Upload.js'
// import SimpleSelect from './SimpleSelect.js'
import ImageProcessor from './ImageProcessor.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
	  	  <MuiThemeProvider>
			     <AppBar title="Image Processor" showMenuIconButton={false}/>
              <ImageProcessor />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
