import './App.css';
import React, { useState } from 'react';
import datosListas from './data/tareas.js';
import Navbar from './components/Navbar';
import List from './components/Lista';
import Agregador from './components/Agregador';
import ContextAPI from './ContextAPI';


function App() {
  const [data, setData] = useState(datosListas);
  console.log(data);
  const actualizarTituloLista = (tituloActualizado, listaId) => {
    const lista = data.listas[listaId];
    console.log(lista);
    lista.titulo = tituloActualizado;
    setData({
      ...data,
      listas: {
        ...data.listas,
        [listaId]: lista
      }
    });
  }


  return (

    <ContextAPI.Provider value={{ actualizarTituloLista }}>

      <div className="App">
        <Navbar titulo="Pandello" />
        <div className="container-fluid mt-2">
          <div className="d-flex justify-content-beetween">
            {
              data.listaIds.map(listaID => {
                const lista = data.listas[listaID]
                return <List lista={lista} key={listaID}></List>
              })
            }
            <Agregador type="list" ></Agregador>
          </div>
        </div>
      </div>

    </ContextAPI.Provider>


  );
}


export default App;
