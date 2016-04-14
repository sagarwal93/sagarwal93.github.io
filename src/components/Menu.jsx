import React, {PropTypes} from 'react';

import cancelIcon from './../images/cancelIcon.png';

const Menu = React.createClass({
  render () {
    return (
      <div id='menu'
        style={{
          display: this.props.docked ? 'none' : 'table'
        }}>
        <div id='menu-container'>
          <button id='menu-hide-button' style={{
            backgroundImage: 'url(' + cancelIcon + ')'
          }}
          onClick={this.props.hideMenu}/>
          <ul id='menu-links'>
            <li> About </li>
            <li> Blog </li>
            <li> Projects </li>
            <li> Resume </li>
          </ul>
        </div>
      </div>
    );
  }
});

export default Menu;
