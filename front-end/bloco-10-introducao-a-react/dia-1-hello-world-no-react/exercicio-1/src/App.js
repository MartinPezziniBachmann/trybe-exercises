
    import React from 'react';
    import './App.css';

    const Task = (value) => {
      return (
        <li key={value}>{value}</li>
      );
    }

    const compromissos = ['Aula', 'Trabalho', 'Jogo do Flamengo'];

    class App extends React.Component {
      render() {
        return (
          <ul>{ compromissos.map(compromisso => Task(compromisso)) }</ul>
        );
      }
    }

    export default App;
