import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="container-global-planetas" data-testid="solar-system">
        <div className="container-titulo-planetas">
          <Title headline="PLANETAS" />
        </div>
        <div className="container-infos-planetas">
          { planets.map((e) => (<PlanetCard
            key={ e.name }
            planetName={ e.name }
            planetImage={ e.image }
          />)) }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
