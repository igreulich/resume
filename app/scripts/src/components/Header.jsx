import React from 'react';

export default React.createClass({
  displayName: 'Header',

  render() {
    return (
      <header className="header">
        <div className="name">
          <h1>Ian Greulich</h1>
        </div>
        <div className="description">
          <h3>Web Developer</h3>
        </div>
      </header>
    );
  }
});
