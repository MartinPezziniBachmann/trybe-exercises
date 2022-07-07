import React, { useState } from 'react';
import useTimer from './hooks/useTimer';
import './App.css';
import TodoList from './TodoList';
import useArray from './hooks/useArray';

function App() {
  // Timer
  const { number, isMultiple, timer } = useTimer();

  // Todo
  const [newInput, setNewInput] = useState('');
  const [todos, addTodos] = useArray();

  const handleInput = ({ target }) => {
    setNewInput(target.value);
  };

  const handleClick = () => {
    addTodos(newInput);
    setNewInput('');
  };

  return (
    <div>
    <div className='App'>
      <p>{`Número aleatório: ${number}`}</p>
      <p>{isMultiple && 'Acerto'}</p>
      <p>Tempo: { timer }</p>
    </div>
    <div>
    <label htmlFor="task-input">
      Add a task:
      <input
        id="task-input"
        placeholder="task"
        name="newItem"
        value={ newInput }
        onChange={ handleInput }
      />
    </label>
    <button type="button" onClick={ () => handleClick() }>Add</button>
    <TodoList tasks={ todos } />
  </div>
    </div>
  );
}

export default App;
