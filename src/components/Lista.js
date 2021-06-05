import React from 'react'
import TituloLista from './TituloLista';
import Card from './Card';
import Agregador from './Agregador';


const List = ({ lista }) => {

   
 
    return (
        <div>

            <div className="card size-card mb-5 m-2">

                {/* Titulo de la culumna  */}
                <div className="card-header">
                    <TituloLista titulo={lista.titulo} listaId={lista.id}></TituloLista>
                </div>

                {/* cuerpo de la card  */}
                <div className="card-body-background card-body">

                    {
                        lista.cards.map(card => {
                            return <Card card={card} key={card.id} ></Card>
                        })
                    }


                </div>

                {/* boton para agregar cards  */}
                <div className="card-footer">
                    <Agregador type="card" ></Agregador>
                </div>

            </div>


        </div>
    )
}

export default List
