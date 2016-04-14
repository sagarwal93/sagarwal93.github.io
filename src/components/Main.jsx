import React, {PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

const Main = React.createClass({
  render () {
    return (
      <div id='main-container'>
        <Header />
        <Menu docked='true' />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

export default Main;
