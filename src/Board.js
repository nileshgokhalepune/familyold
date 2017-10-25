import React, { Component } from 'react';
import { Member } from './Member';

export class Board extends Component {
  componentDidMount() {
      
  }

  constructor(props) {
    super(props);
    this.peer = 'peer';
    this.children = 'child';
    this.parents = 'parent';
    this.state = {
      name: 'N',
      relation: 'Self',
      type: 'self',
      family: [{
        name: 'S',
        relation: 'Father',
        type: 'parent'
      }, {
        name: 'J',
        relation: 'Mother',
        type: 'parent'
      }, {
        name: 'P',
        relation: 'Wife',
        type: 'peer'
      }, {
        name: 'E',
        relation: 'Daughter',
        type: 'child'
      }, {
        name: 'R',
        relation: 'Son',
        type: 'child'
      }, {
        name: 'S',
        relation: 'Sister',
        type: 'peer'
      }, {
        name: 'D',
        relation: 'Nephew',
        type: 'child'
      }, {
        name: 'V',
        relation: 'Aunt',
        type: 'parent'
      }]
    }
  }

  renderMember(state) {
    return <Member value={state} />
  }

  render() {
    let family = this.state.family;
    const peers = family.map((f) => {
      return f.type === this.peer ? <Member value={f} /> : '';
    });
    const subordinates = family.map((f) => {
      return f.type === this.children ? <Member value={f} /> : '';
    });
    const parents = family.map((f) => {
      return f.type === this.parents ? <Member value={f} /> : '';
    });
    return (
      <div class="container">
        <div class="parents">
            {parents}
        </div>
        <div class="peers">
            {this.renderMember(this.state)}
            {peers}
        </div>
        <div class="children">
            {subordinates}
        </div>
      </div>
    )
  }
}

