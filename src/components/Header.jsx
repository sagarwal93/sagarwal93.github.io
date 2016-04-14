import React, {PropTypes} from 'react';

import menuIcon from './../images/menuIcon.png';

const Header = React.createClass({
  render () {
    return (
      <div id='header'>
        <div>
          <div id='header-main'>
            <span id='header-logo'>
              Samarth A.
            </span>
            <button id='header-menu-button'
              style={{
                backgroundImage: 'url(' + menuIcon + ')'
              }}
              onClick={this.props.showMenu} />
          </div>
        </div>
      </div>
    );
  }
});

export default Header;
