import './App.css';

import { tareas } from './data/tareas.json';

import Navbar from './components/Navbar';
import List from './components/Lista';

function App() {
  return (
    <div className="App">
      <Navbar titulo="Pandello"/>

      <div className="container-fluid mt-2">
        <List></List>
      </div>
      
      
    </div>
  );
}


export default App;
