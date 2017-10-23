import React, { Component } from 'react';
import { Member } from './Member';

export class Board extends Component {
  renderMember(i) {
    return <Member value={i} />
  }

  render() {
    return (
      <div>
          {this.renderMember(0)}
      </div>
    )
  }
}

