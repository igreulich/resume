import React    from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Job    from './components/Job';

import { experience } from '../../data/experience';

let App = React.createClass({
  displayName: 'Resume',

  render() {
    const _renderJob = (job, index) => {
      return (<Job key={index} job={job} />);
    };

    return (
      <div id="content">
        <Header />
        {experience.map(_renderJob)}
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('resumeApp'));
