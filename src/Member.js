import React, { Component } from 'react';

export class Member extends Component {

  render() {
    let display = '';
    let type = this.props.value.type;
    if (type === 'self') {
      display = 'You'
    } else {
      display = 'Your '; // + this.props.value.relation;
    }
    return (
      <div>
        <div type="member">
                <div className="name">{this.props.value.name}</div>
                {display}
        </div>
        <div>
            <i className="fa fa-list"></i>
        </div>
      </div>
    )
  }
}