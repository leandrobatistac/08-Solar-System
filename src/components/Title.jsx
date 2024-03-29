import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="subtitulo">{ headline }</h2>
    );
  }
}

export default Title;

Title.defaultProps = {
  headline: '',
};

Title.propTypes = {
  headline: PropTypes.string,
};
