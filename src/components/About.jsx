import React, {PropTypes} from 'react';

import swagarwal from './../images/swagarwal.png';

const About = React.createClass({
  render () {
    return (
      <div id='about'>
        <div id='about-image-container'>
          <img id='about-image'
            src='src/images/swagarwal.png'>
          </img>
        </div>
      </div>
    );
  }
});

export default About;
