import './App.css';
import React, { useState } from 'react';
import datosListas from './data/tareas.js';
import Navbar from './components/Navbar';
import List from './components/Lista';
import Agregador from './components/Agregador';
import ContextAPI from './ContextAPI';
import uuid from "react-uuid";
import { useLocalStorage } from './data/localStorage';


function App() {
  // const [data, setData] = useState(datosListas);
  const [data, setData] = useLocalStorage('datos', datosListas);
  console.log(data);

  // localStorage.removeItem('datos');



  // recibe el nuevo titulo escrito y el id cuando se ejecuta el onblur en el input de la culumna
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



  const agregarCard = (titulo, listaId) => {
    const nuevaCardId = uuid();
    const nuevaCard = {
      id: nuevaCardId,
      titulo
    }
    const lista = data.listas[listaId];
    lista.cards = [
      ...lista.cards,
      nuevaCard
    ]
    setData({
      ...data,
      listas: {
        ...data.listas,
        [listaId]: lista
      }
    })
  }



  const agregarColumna = (titulo) => {
    const nuevaColumnaId = uuid();

    setData({
      listaIds: [
        ...data.listaIds,
        nuevaColumnaId
      ],
      listas: {
        ...data.listas,
        [nuevaColumnaId]: {
          id: nuevaColumnaId,
          titulo,
          cards: []
        }
      }
    })
  }


  return (

    <ContextAPI.Provider value={{ actualizarTituloLista, agregarCard, agregarColumna }}>

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
