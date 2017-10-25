import React, { Component } from 'react';

export class Member extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let display = '';
    let type = this.props.value.type;
    if (type === 'self') {
      display = 'You'
    } else {
        display = 'Your ' + this.props.value.relation;
    }
    return (
      <div type="member">
            <div class="name">{this.props.value.name}</div>
            {display}
      </div>
    )
  }
}