import React, { Component } from 'react';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free-webfonts/css/fontawesome.css'
import '../node_modules/@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* make sure to use the className attribute, because this is React, not normal html */}
        <i className="fas fa-coffee"></i>
      </div>
    );
  }
}

export default App;
