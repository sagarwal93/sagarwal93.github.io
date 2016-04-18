import React, {PropTypes} from 'react';

const ProjectItem = React.createClass({
  render () {
    return (
      <div className='project-section'>
        <div className='project-item-banner'>
          <p className='project-item-header'>
            {this.props.header}
          </p>
          <p className='project-item-timeline'>
            {this.props.timeline}
          </p>
        </div>
        <div className='project-item-notes'>
          {
            this.props.notes.map((note, noteIdx) => {
              return <p key={noteIdx}
                className='project-item-note'>
                {note}
              </p>;
            })
          }
        </div>
        <p className='project-item-video'>
          <a href={this.props.videoLink}> {this.props.videoTitle} </a>
        </p>
      </div>
    );
  }
});

export default ProjectItem;
