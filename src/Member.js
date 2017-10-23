import React, { Component } from 'react';

export class Member extends Component {
  render() {
    return (
      <button className="square">
          {this.props.value}
      </button>
    )
  }
}