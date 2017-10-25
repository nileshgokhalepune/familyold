import React, { Component } from 'react';
import { Board } from './Board';
import { Login } from './Login'
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  componentDidMount() {
    var ticket = window.localStorage.getItem('ticket');
    if (ticket) {
      this.state.isLoggedIn = true;
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    let renderer = this.state.isLoggedIn ? <Board /> : <Login />
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Family</h1>
        </header>
        {renderer}
        { /* <Board />
        <Login />         */ }
      </div>
      );
  }
}
