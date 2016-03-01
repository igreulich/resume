import React from 'react';

export default React.createClass({
  displayName: 'Company Card',

  render() {
    const {
      company,
      link,
      title,
      start,
      end
    } = this.props;

    return (
      <a href={link} target="_blank">
        <div className="card card-link company-card">
          <div className="company-card__image">
            <img src={'assets/' + company.toLowerCase() + '.png'} alt={company} />
          </div>
          <div className="company-card__info">
            <h2>{title}</h2>
            <p>
              <span>{start}</span>
              <span> - </span>
              <span>{end}</span>
            </p>
          </div>
        </div>
      </a>
    );
  }
});
