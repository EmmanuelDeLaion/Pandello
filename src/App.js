import './App.css';
import React, { useState } from 'react';
import datosListas from './data/tareas';

import Navbar from './components/Navbar';
import List from './components/Lista';
import AgregadorText from './components/AgregadorText';
import Agregador from './components/Agregador';

import ContextApi from './ContextApi';


function App() {

  const [data, setData] = useState(datosListas);
  console.log(data);


  const actualizarTituloLista = (titulo, idListas) => {
    const lista = data.listas[idListas]
 
    setData({
      ...data,
      idListas: {
        ...data.listas,
        [idListas]: lista
      }
    });
  }


  return (

    <ContextApi.Provider value={{ actualizarTituloLista }}>

      <div className="App">
        <Navbar titulo="Pandello" />
        <div className="container-fluid mt-2">
          <div className="d-flex justify-content-beetween">
            {
              data.idListas.map(idLista => {
                const lista = data.listas[idLista]
                return <List lista={lista} key={idLista}></List>
              })
            }
            <Agregador type="list" ></Agregador>
          </div>

        </div>
      </div>

    </ContextApi.Provider>


  );
}


export default App;
