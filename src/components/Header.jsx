import React, {PropTypes} from 'react';

import menuIcon from './../images/menuIcon.png';

const Header = React.createClass({
  render () {
    return (
      <div id='header'>
        <div>
          <div id='header-main'>
            <span>
              Samarth A.
            </span>
            <button id='header-menu-button'
              style={{
                backgroundImage: 'url(' + menuIcon + ')'
              }} />
          </div>
        </div>
      </div>
    );
  }
});

export default Header;
