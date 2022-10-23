import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const texto = `Planeta ${planetName}`;
    return (
      <div className="card-planeta" data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img className="foto-planeta" src={ planetImage } alt={ texto } />
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.defaultProps = {
  planetName: '',
  planetImage: '',
};

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};
