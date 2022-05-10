// arquivo Order.js
import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.data;

    return (
      <div className="pokemon">
        <h1>{name}</h1>
        <p>{type}</p>
        <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt={name}></img>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
}

export default Pokemon;