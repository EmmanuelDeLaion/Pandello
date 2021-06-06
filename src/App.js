import './App.css';
import React, { useState } from 'react';
import datosListas from './data/tareas.js';
import List from './components/Lista';
import Agregador from './components/Agregador';
import uuid from "react-uuid";
import { useLocalStorage } from './data/localStorage';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Swal from 'sweetalert2';
import MyContextAPI from './ContextApi';

 

function App() {
  const [data, setData] = useLocalStorage('datos', datosListas);

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

  const onDragEnd = (result) => {
    const {
      destination,
    } = result;

    if (!destination) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La tarea no se puede mover',
      });
    }

  }


  return (

    <MyContextAPI.Provider value={{ actualizarTituloLista, agregarCard, agregarColumna }}>
      <div className="App">

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="1" type="list" direction="horizontal">
            {
              (provided) => (
                <div className="container-fluid mt-2" ref={provided.innerRef} {...provided.droppableProps}>
                  <div className="container-columnas d-flex justify-content-beetween">
                    {
                      data.listaIds.map((listaID, index) => {
                        const lista = data.listas[listaID]
                        return <List lista={lista} key={listaID} index={index}></List>
                      })
                    }
                    <Agregador type="list" ></Agregador>
                    {
                      provided.placeholder
                    }
                  </div>
                </div>
              )
            }



          </Droppable>
        </DragDropContext>


      </div>

    </MyContextAPI.Provider>


  );
}


export default App;
