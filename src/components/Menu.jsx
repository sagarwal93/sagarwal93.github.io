import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import cancelIcon from './../images/cancelIcon.png';

const fastLinks = ['About', 'Blog', 'Projects', 'Resume'];

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
            {
              fastLinks.map((link) => {
                return <Link to={link.toLowerCase()}
                  onClick={this.props.hideMenu}
                  key={link}>
                    <li className='menu-link'> {link} </li>
                  </Link>;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
});

export default Menu;
