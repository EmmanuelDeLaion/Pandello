import logo from './logo.svg';
import './App.css';

import { tareas } from './data/tareas.json';

import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar titulo="Pandello"/>
    </div>
  );
}


export default App;
