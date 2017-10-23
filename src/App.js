import React, { Component } from 'react';
import { Board } from './Board';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Family</h1>
        </header>
        <Board />
      </div>
      );
  }
}
