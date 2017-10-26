import React, { Component } from 'react';
import { Member } from './Member';

export class Board extends Component {

  componentWillMount() {
    this.setState({
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
    });
  }
  constructor(props) {
    super(props);
    this.peer = 'peer';
    this.children = 'child';
    this.parents = 'parent';

  }

  renderMember(state) {
    return <Member value={state} />
  }

  render() {
    var peers = null;
    var subordinates = null;
    var parents = null;
    if (this.state) {
      let family = this.state.family;
      peers = family.map((f, i) => {
        return f.type === this.peer ? <Member value={f} key={i} /> : '';
      });
      subordinates = family.map((f, i) => {
        return f.type === this.children ? <Member value={f} key={i} /> : '';
      });
      parents = family.map((f, i) => {
        return f.type === this.parents ? <Member value={f} key={i} /> : '';
      });
    }
    return (
      <div className="family-container">
        <div className="you">
            {this.renderMember(this.state)}
        </div>
        <div className="family">
            <div className="parents">
                {parents}
            </div>
            <div className="peers">
                {peers}
            </div> 
            <div className="children">
                {subordinates}
            </div>
        </div>
      </div>
    )
  }
}

