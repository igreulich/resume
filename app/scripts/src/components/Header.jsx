import React from 'react';

export default React.createClass({
  displayName: 'Header',

  render() {
    return (
      <header className="header">
        <div className="name">Ian Greulich</div>
        <div className="description">Web Developer</div>
      </header>
    );
  }
});
