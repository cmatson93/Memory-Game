import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid />
      </div>
    );
  }
}

export default App;