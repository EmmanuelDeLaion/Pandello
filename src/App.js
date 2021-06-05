import './App.css';
import React, { useState } from 'react';
import datosListas from './data/tareas';

import Navbar from './components/Navbar';
import List from './components/Lista';
import AgregadorText from './components/AgregadorText';
import Agregador from './components/Agregador';



function App() {

  const [datos, setDatos] = useState(datosListas);
  console.log(datos);

  return (
    <div className="App">
      <Navbar titulo="Pandello" />

      <div className="container-fluid mt-2">
        <div className="d-flex justify-content-beetween">
          {
            datos.idListas.map(idLista =>{
              const lista = datos.listas[idLista]
              return <List lista={lista} key={idLista}></List>
            })
          } 
          <Agregador type="list" ></Agregador>
        </div>

      </div>


    </div>
  );
}


export default App;
