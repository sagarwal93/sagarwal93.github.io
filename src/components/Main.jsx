import React, {PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer';

const Main = React.createClass({
  render () {
    return (
      <div id='main-container'>
        <Header />
        <div id='main-content'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
});

export default Main;
