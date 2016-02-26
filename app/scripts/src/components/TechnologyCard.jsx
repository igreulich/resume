import React from 'react';

export default React.createClass({
  displayName: 'Technology Card',

  render() {
    const { technology } = this.props;

    return (
      <a className="card card-link technology-card">
        <div className="technology-card__image">
          <img src={'assets/' + technology.toLowerCase() + '.png'} height="40" width="40" alt={technology} />
        </div>
        <div className="technology-card__info">
          <h3>{technology}</h3>
        </div>
      </a>
    );
  }
});
