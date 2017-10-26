import React, { Component } from 'react';
export class Login extends Component { 
  
  login(event) {
    //event.preventDefault();
    window.localStorage.setItem('ticket','loggedin');
    debugger;
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  stateChanged(event) {}

  render() {
    return (
      <form onChange={(event) => this.onFieldChange(event)} onSubmit={(event) => this.login(event)}>
        <div className="form-group">
            <label>User name:
                <input className="form-control" name="userName"  type="text" id="userName"/>
            </label>
            <label>Password:
                <input className="form-control" name="password" type="password" id="password"/>
            </label>
            <input type="submit" id="submit" className="btn btn-primary" value="Login" />
        </div>
      </form>
    )
  }
}
