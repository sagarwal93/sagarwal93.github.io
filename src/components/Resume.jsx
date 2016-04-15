import React, {PropTypes} from 'react';

import ResumeItem from './ResumeItem';

const Resume = React.createClass({
  render () {
    return (
      <div className='main-content'>
        <div id='resume-content'>
          <ResumeItem header='Education' list={
              [{
                header: 'Georgia Institute of Technology',
                timeline: 'August 2011 - December 2014',
                notes: [
                  'Bachelor of Science in Computer Science ' +
                  '(Artificial Intelligence and Information Internetworks)'
                ]
              }]
            } />
        </div>
      </div>
    );
  }
});

export default Resume;
