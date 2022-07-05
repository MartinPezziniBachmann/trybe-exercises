import React, { Component } from 'react';

const FamilyContext = React.createContext();

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => ({ inheritance: prevState.inheritance - 1000 }));
  }

  render() {
    const contextValue = {
      inheritance: this.state.inheritance,
      spendInheritance: this.spendInheritance
    };

    return (
      <FamilyContext.Provider value={contextValue}>
        <h1>GrandGrandfather</h1>
        <Grandmother />
      </FamilyContext.Provider>
    );
  }
}

function Grandmother(props) {
  return (
    <div>
      <h2>Grandmother</h2>
      <Father />
    </div>
  );
}

function Father(props) {
  return (
    <div>
      <h2>Father</h2>
      <Daughter />
    </div>
  );
}

function Daughter() {
  return (
    <FamilyContext.Consumer>
      {(value) => {
        console.log(value);
        return       (
          <div>
            <h4>Daughter</h4>
            <span>
              `Tenho uma herança de R$ ${value.inheritance} que recebi do meu bisavô`
            </span>
            <button type="button" onClick={value.spendInheritance}>
              Gastar Herança!
            </button>
          </div>
        )  
      } }
    </FamilyContext.Consumer>
  );
}

export default GreatGrandfather;
