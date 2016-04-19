import React, {PropTypes} from 'react';
import ProjectItem from './ProjectItem';

const Projects = React.createClass({
  render () {
    return (
      <div className='main-content'>
        <div id='project-content'>
          <ProjectItem header='Quizzler'
            notes={[
              'This project is intended (as very little is built right now) to be a ' +
              'data aggregation tool through which surveys and classroom quizzes can be ' +
              'conducted.', 'Currently building the front end by using libraries and ' +
              'frameworks like React, Redux, Immutable.js, Mocha, Chai, Webpack etc.',
              'Learning restful API development in Node.js, Express.js, and Mongoose ' +
              'supported by a MongoDB database hosted using MongoLab.'
            ]}
            timeline='January 2016 - Present'
            />
          <ProjectItem header='Guardian'
            notes={['A personal safety app to guarantee you a safer night out.',
              'Created an android app backed by a REST API written in Node.js',
              'Managed the project by setting meetings and breaking down deliverables ' +
              'into achievable goals.'
            ]}
            timeline='February 2014 - April 2014'
            videoLink='https://vimeo.com/92144677'
            videoTitle='Watch the demo' />
          <ProjectItem header='Classnote'
            notes={['Android application to provide a mobile platform for Georgia Tech\'s ' +
            'course management system', 'Served as an android developer and project manager.']}
            timeline='August 2013 - May 2014'
            />
        </div>
      </div>
    );
  }
});

export default Projects;
