import './App.css';
import React from 'react'
import Nome from './Nome'
import Idade from './Idade'

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      resposta: '',
      nome: '',
      idade: 0,
      accept: false,
      formularioComErros: false,
    }
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }

  render (){
    return (
      <div className="App">
        <form className="form">
          <label>
            Qual sua resposta?
            <textarea name="resposta" value={this.state.resposta} onChange={this.handleChange} />
          </label>
          Seu nome: <Nome handleChange={this.handleChange} />
          Sua idade: <Idade handleChange={this.handleChange} />
          Você aceita? <input
            type="checkbox"
            name="accept"
            checked={this.state.accept}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );  
  }
}

export default App;
