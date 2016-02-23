import React    from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

let App = React.createClass({
  displayName: 'Resume',

  render() {
    return (
      <div id="content">
        <Header />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('resumeApp'));
