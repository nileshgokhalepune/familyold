import React, { Component } from 'react';
export class Login extends Component {
  login() {}

  updateValue(modifiedValue) {
    this.setState({
      value: modifiedValue
    });
  }

  getInitialState() {
    return {
      value: ''
    }
  }


  render() {
    return (
      <div className="form-group">
          <label>User name:
            <input className="form-control"  type="text" id="userNameF"/>
          </label>
          <label>Password:
            <input className="form-control" type="password" id="password"/>
          </label>
          <button id="submit" className="btn btn-primary" onClick="">Login</button>
      </div>
    )
  }
}

export class InputBox extends Component {
  update() {
    var modifiedValue = this.refs.inputValue.getDOMNode().value;
    this.props.updateValue(modifiedValue);
  }
  render() {
    return (<input type="text" ref="inputValue" value={this.props.value} onChange={this.update} />)
  }
}