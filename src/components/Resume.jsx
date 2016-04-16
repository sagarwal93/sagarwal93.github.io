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
            }
            />

          <ResumeItem header='Skills' list={
              [{
                header: 'Programming',
                notes: ['ASP.NET, Node.js, JavaScript, jQuery, React, Flux, Redux, HTML, CSS, Python,' +
                'Java, XML, SQL, Sass, Jade, C, Assembly Language, PHP, Android SDK, MATLAB']
              }]
            }
            />

          <ResumeItem header='Experience' list={
              [{
                header: 'NCR',
                timeline: 'March 2015 - Present',
                subHeader: 'Software Engineer I',
                notes: ['Full stack developer on the feature team at NCR, which is responsible to deliver new ' +
                  'features to NCR\'s clients.', 'Built components of NCR\'s client\'s administration and ' +
                  'ordering website, and NCR\'s ordering API.', 'Led a team to build a prototype application ' +
                  'that supports crowd-sourced food delivery and worked on a team that built a Tinder-like ' +
                  'food ordering app.'
                ]
              }, {
                header: 'Earsketch',
                timeline: 'August 2014 - December 2014',
                subHeader: 'Undergraduate Research Assistant',
                notes: ['A tool built for middle/high school students to encourage them to code. It exposes ' +
                  'APIs to convert code into music that can be played through a mixer built on the web.',
                  'Learned HTML, CSS and JavaScript by working on the mixer layout and implemented some ' +
                  'modules that displayed waveform output for the mixer after the code was converted.'
                ]
              }, {
                header: 'Razorfish',
                timeline: 'June 2014 - August 2014',
                subHeader: 'Associate Software Engineer',
                notes: ['Built parts of the website for Delta Faucet to incorporate the designs created by the ' +
                  'UI and UX team.', 'Built components of the Firestone Tire website that provided customers ' +
                  'a digital experience of the product.', 'Strategized campaign ideas for business growth and ' +
                  'brand awareness for Netflix with a team of co-interns.', 'Configured Apache Solr ' +
                  '(database indexation) with the existing system for Bridgestone Tire, which aided the realization ' +
                  'of a search tool for online consumers.'
                ]
              }, {
                header: 'MATLAB Support Research',
                timeline: 'January 2013 - March 2013',
                subHeader: 'Undergraduate Research Assistant',
                notes: [
                  'Worked on emulating the MathWorks MATLAB console to help visualize matrices in the workspace ' +
                  'as heatmaps in real time as users execute commands on the command line.', 'Created parts of an ' +
                  'interface to help users understand how their algorithms work and for easier debugging.'
                ]
              }, {
                header: 'Cinecita Private Limited',
                timeline: 'June 2013 - August 2013',
                subHeader: 'Director (Family owned)',
                notes: [
                  'Learned basic accounting by tallying company accounts, and how to draft quotations accounting ' +
                  'for various profit margins.', 'Sat in on client meetings to create business growth, thus learning ' +
                  'how a business operates from ground up.'
                ]
              }, {
                header: 'Teaching Assistant',
                timeline: 'January 2014 –December 2014',
                subHeader: 'Undergraduate Teaching Assistant (CS 2200 – Systems and Networks)',
                notes: [
                  'Responsible for creating and grading assignments in Logisim, Assembly Language, and C.',
                  'Held recitation sessions and office hours to provide academic and professional support to students.'
                ]
              }, {
                header: 'Tutor',
                timeline: 'Junuary 2012 - May 2014',
                subHeader: 'Undergraduate Tutor',
                notes: [
                  'Provided one to one tutoring for Computer Science classes like Data Structures and Algorithms, ' +
                  'Introduction to Python, Introduction to Java, Discrete Mathematics, and Computer Organization and ' +
                  'Programming.'
                ]
              }]
            }
          />
        </div>
      </div>
    );
  }
});

export default Resume;
