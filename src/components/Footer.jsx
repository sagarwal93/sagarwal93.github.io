import React, {PropTypes} from 'react';

import facebookIcon from './../images/facebookIcon.png';
import twitterIcon from './../images/twitterIcon.png';
import instagramIcon from './../images/instagramIcon.png';
import linkedinIcon from './../images/linkedinIcon.png';
import githubIcon from './../images/githubIcon.png';

const Footer = React.createClass({
  render () {
    return (
      <div id="footer">
        <div>
          <a className='footer-icon'
            style={{backgroundImage: 'url(' + facebookIcon + ')'}}
            href='https://www.facebook.com/samarth.agarwal.79'>
          </a>
          <a className='footer-icon'
            style={{backgroundImage: 'url(' + twitterIcon + ')'}}
            href='https://twitter.com/sagarwal93'>
          </a>
          <a className='footer-icon'
            style={{backgroundImage: 'url(' + instagramIcon + ')'}}
            href='https://www.instagram.com/swagarwal93'>
          </a>
          <a className='footer-icon'
            style={{backgroundImage: 'url(' + linkedinIcon + ')'}}
            href='https://www.linkedin.com/in/samarth-agarwal-9a456658'>
          </a>
          <a className='footer-icon'
            style={{backgroundImage: 'url(' + githubIcon + ')'}}
            href='https://github.com/sagarwal93'>
          </a>
        </div>
        <div>
          samarth.agarwal1993@gmail.com
        </div>
      </div>
    );
  }
});

export default Footer;
