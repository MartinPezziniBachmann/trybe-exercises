import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex data={pokemons} />
    </div>
  );
}

export default App;
