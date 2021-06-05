import './App.css';

import { tareas } from './data/tareas.json';

import Navbar from './components/Navbar';
import List from './components/Lista';
import AgregadorText from './components/AgregadorText';
import Agregador from './components/Agregador';

function App() {
  return (
    <div className="App">
      <Navbar titulo="Pandello" />

      <div className="container-fluid mt-2">
        <div className="d-flex justify-content-beetween">
          <List></List>
          <List></List>
          <List></List>
          <Agregador type="list" ></Agregador>
        </div>

      </div>


    </div>
  );
}


export default App;
