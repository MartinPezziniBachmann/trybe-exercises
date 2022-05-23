import React from 'react'

class Nome extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;

    return (
      <label>
      <input type="text" name="nome" value={value} onChange={handleChange} />
      <span>{error ? error : ''}</span>
    </label>
    )
  }
}

export default Nome;
