import React, { Component } from 'react';
export class Login extends Component {
  render() {
    return (
      <div>
          <label>User name:</label>
          <input type="text" id="userNameF"/>
          <label>Password:</label>
          <input type="password" id="password"/>
      </div>
    )
  }
}