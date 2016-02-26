import React from 'react';

import CompanyCard from './CompanyCard';
import SkillsCard from './SkillsCard';

export default React.createClass({
  displayName: 'Experience Section',

  render() {
    const {
      employer,
      link,
      title,
      skills,
      start,
      end,
      projects,
      technologies
    } = this.props.job;

    return (
      <div className="pure-g">
        <div className="pure-u-1 pure-u-xl-1-3">
          <CompanyCard company={employer} link={link} title={title} start={start} end={end} />
        </div>
        <div className="pure-u-1 pure-u-xl-2-3">
          <SkillsCard skills={skills} projects={projects} technologies={technologies} />
        </div>
      </div>
    );
  }
});
