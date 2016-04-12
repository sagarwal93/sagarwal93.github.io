import React, {PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer';

const Main = React.createClass({
  render () {
    return (
      <div id='main-container'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

export default Main;
