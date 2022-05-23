import React from 'react'

class Idade extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;

    if (value > 18) error = "Idade muito grande!";
    if (value < 0) error = "Não é permitido idade menor que zero!";

    return (
      <label>
        <input type="number" name="idade" value={value} onChange={handleChange} />)
        <span>{error ? error : ''}</span>
      </label>
    )}
}

export default Idade;