import React from 'react'
import TituloLista from './TituloLista';
import Card from './Card';
import Agregador from './Agregador';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const List = ({ lista, index }) => {
    return (
        <Draggable draggableId={lista.id} index={index}>
            {
                (provided) => (
                    <div {...provided.draggableProps} ref={provided.innerRef}>

                        <div className="card size-card mb-5 m-2" {...provided.dragHandleProps}>
                            <div className="card-header">
                                <TituloLista titulo={lista.titulo} listaId={lista.id}></TituloLista>
                            </div>


                            <div className="card-body-background card-body">

                                <Droppable droppableId={lista.id}>
                                    {
                                        (provided) => (

                                            <div ref={provided.innerRef} {...provided.droppableProps} >

                                                {
                                                    lista.cards.map((card, index) => {
                                                        return <Card card={card} key={card.id} index={index} ></Card>
                                                    })
                                                }
                                                {provided.placeholder}

                                            </div>

                                        )
                                    }


                                </Droppable>


                            </div>


                            <div className="card-footer">
                                <Agregador type="card" listaId={lista.id} ></Agregador>
                            </div>
                        </div>
                    </div>
                )
            }

        </Draggable>

    )

}


export default List




    // < div className = "card-body-background card-body" >
    // {
    //     lista.cards.map(card => {
    //         return <Card card={card} key={card.id} ></Card>
    //     })
    // }
    //                         </ >