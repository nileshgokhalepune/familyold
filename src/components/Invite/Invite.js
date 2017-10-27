import React, { Component } from 'react';

export class Invite extends Component {
  render() {
    return (
      <div>
          <label> Name:
              <input type="text" name="memberName" />
          </label>
          <label>Email:
              <input type="email" name="memberEmail" />
         </label>
         <label>Relation:
             <select>
                 <option></option>
             </select>
         </label>
      </div>
      );
  }

}