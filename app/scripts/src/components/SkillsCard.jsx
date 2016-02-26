import React from 'react';

export default React.createClass({
  displayName: 'Skills Card',

  render() {
    const {
      skills,
      projects,
      technologies
    } = this.props;

    const skillList = (skill, index) => {
      return (<li key={index}>{skill}</li>);
    };

    const techList = (tech, index) => {
      return (<span>tech</span>);
    };

    return (
      <div>
        <div id="slider" className="card detail-card">
          <ul>
            {skills.map(skillList)}
          </ul>
        </div>
        <h1 className="experience-header">Technologies</h1>
        <div className="technology-card-list">
          {technologies.map(techList)}
        </div>
      </div>
    );
  }
});
