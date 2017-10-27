import React, { Component } from 'react';

export class Member extends Component {

  showPosts(event) {
    if (this.props.callbackPosts)
      this.props.callbackPosts(this.props.value.id);
  }

  showLikes(event) {}
  render() {
    let display = '';
    let type = this.props.value.type;
    if (type === 'self') {
      display = 'You'
    } else {
      display = 'Your '; // + this.props.value.relation;
    }

    let showPeeks = type === 'self' ? '' : (
      <div className="peeks">
            <i title="Posts" className="fa fa-list" onClick={(event) => this.showPosts(event)}></i>
        </div>);

    return (
      <div className="member">
        <div type="member">
                <div className="name">{this.props.value.name}</div>
                {display}
        </div>
        {showPeeks}
      </div>
    )
  }
}