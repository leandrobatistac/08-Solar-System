import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div className="container-global-missoes" data-testid="missions">
        <div className="container-titulo-missoes">
          <Title headline="MISSÕES" />
        </div>
        <div className="container-infos-missoes">
          {missions.map((e) => (<MissionCard
            key={ e.name }
            name={ e.name }
            year={ e.year }
            country={ e.country }
            destination={ e.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
