import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="box-missao" data-testid="mission-card">
        <div className="box-1">
          <p className="nome-missao" data-testid="mission-name">
            {' '}
            { name }
            {' '}
          </p>
        </div>
        <div className="box-2">
          <p className="ano-missao" data-testid="mission-year">
            {' '}
            { year }
            {' '}
          </p>
          <p className="pais-missao" data-testid="mission-country">
            {' '}
            { country }
            {' '}
          </p>
          <p className="destino-missao" data-testid="mission-destination">
            {' '}
            { destination }
            {' '}
          </p>
        </div>
      </div>
    );
  }
}

export default MissionCard;

MissionCard.defaultProps = {
  name: '',
  year: '',
  country: '',
  destination: '',
};

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};
