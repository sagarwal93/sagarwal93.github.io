import React, {PropTypes} from 'react';

const ResumeItem = React.createClass({
  render () {
    return (
      <div className='resume-section'>
        <p className='resume-header'> {this.props.header} </p>
        {
          this.props.list.map((listItem, idx) => {
            return <div className='resume-item-container'
              key={idx}>
              <div className='resume-item-banner'>
                <p className='resume-item-header'>
                  {listItem.header}
                </p>
                <p className='resume-item-timeline'>
                  {listItem.timeline}
                </p>
              </div>
              <div>
                <p className='resume-item-sub-header'>
                  {listItem.subHeader}
                </p>
              </div>
              <div className='resume-item-notes'>
                {
                  listItem.notes.map((note, noteIdx) => {
                    return <p key={noteIdx}
                      className='resume-item-note'>
                      {note}
                    </p>;
                  })
                }
              </div>
            </div>;
          })
        }
      </div>
    );
  }
});

export default ResumeItem;
