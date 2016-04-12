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
        <div id='about-desc-container'>
          <p className='header'>
            Hello!
          </p>
          <p className='about-desc'>
            I am a full-stack software developer and part-time nerd. I work at NCR where I build backend services
            to enable online food ordering.
          </p>
          <p className='about-desc'>
            I graduated from Georgia Tech with a Bachelor's in Computer Science.
            Besides setting me up for success, college left me with an addiction to caffeine.
          </p>
          <p className='about-desc'>
            When I am not writing code I play Badminton and Dota 2.
            Occasionally I go to the gym.
          </p>
          <p className='about-desc'>
            Beards are awesome. I try!
          </p>
        </div>
      </div>
    );
  }
});

export default About;
