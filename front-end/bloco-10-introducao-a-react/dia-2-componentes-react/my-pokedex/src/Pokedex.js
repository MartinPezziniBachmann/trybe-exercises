// arquivo Order.js
import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render() {
    return this.props.data.map(elemento => <Pokemon data={elemento} />);
  }
}

Pokedex.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object),
}

export default Pokedex;