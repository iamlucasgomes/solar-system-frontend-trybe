import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planet-card planet-card-content" data-testid="planet-card">
        <p className="planet-name" data-testid="planet-name">{planetName}</p>
        <img
          className="image"
          src={ planetImage }
          alt={ 'Planeta '.concat(planetName) }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,

};

export default PlanetCard;
