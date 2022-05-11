// src/App.js
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
    this.state = {
      buttonOne: 0,
      buttonTwo: 0,
      buttonThree: 0,
    }
  }

  handleButtonOne() {
    this.setState((previousState, _props) => ({
      buttonOne: previousState.buttonOne + 1,
    }), () => { console.log(this.getColor(this.state.buttonOne))});
  }

  handleButtonTwo() {
    this.setState((previousState, _props) => ({
      buttonTwo: previousState.buttonTwo + 1,
    }), () => { console.log(this.getColor(this.state.buttonTwo))});
  }

  handleButtonThree() {
    this.setState((previousState, _props) => ({
      buttonThree: previousState.buttonThree + 1,
    }), () => { console.log(this.getColor(this.state.buttonThree))});
  }

  getColor(count) {
    return count % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { buttonOne, buttonTwo, buttonThree } = this.state;
    return (
      <div>
        <button onClick={ this.handleButtonOne } style={{ backgroundColor: this.getColor(buttonOne)}}>{this.state.buttonOne}</button>
        <button onClick={ this.handleButtonTwo } style={{ backgroundColor: this.getColor(buttonTwo)}}>{this.state.buttonTwo}</button>
        <button onClick={ this.handleButtonThree } style={{ backgroundColor: this.getColor(buttonThree)}}>{this.state.buttonThree}</button>
      </div>
    );
  }
}

export default App;
