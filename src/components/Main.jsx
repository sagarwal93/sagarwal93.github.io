import React, {PropTypes} from 'react';
import Header from './Header';

const Main = React.createClass({
  render () {
    return (
      <div>
        <Header />
        You found me. This page is still in the works. Stay tuned!
      </div>
    );
  }
});

export default Main;
