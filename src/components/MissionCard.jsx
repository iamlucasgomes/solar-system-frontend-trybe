import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <p data-testid="mission-name">{'Nome: '.concat(name)}</p>
        <p data-testid="mission-year">{'Ano: '.concat(year)}</p>
        <p data-testid="mission-country">{'País: '.concat(country)}</p>
        <p data-testid="mission-destination">{'Destino: '.concat(destination)}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
