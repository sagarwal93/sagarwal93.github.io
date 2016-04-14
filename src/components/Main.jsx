import React, {PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

const Main = React.createClass({

  getInitialState() {
    return {
      menuDocked: true
    };
  },

  toggleMenuDisplay() {
    this.setState({
      menuDocked: !this.state.menuDocked
    });
  },

  render () {
    return (
      <div id='main-container'>
        <Header showMenu={() => this.toggleMenuDisplay()} />
        <Menu docked={this.state.menuDocked} hideMenu={() => this.toggleMenuDisplay()} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

export default Main;
