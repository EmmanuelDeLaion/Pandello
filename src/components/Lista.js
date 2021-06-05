import React from 'react'
import TituloLista from './TituloLista';
import Card from './Card';
import Agregador from './Agregador';


const List = () => {
    return (
        <div>

            <div className="card size-card mb-5 m-2">

                {/* Titulo de la culumna  */}
                <div className="card-header">
                    <TituloLista></TituloLista>
                </div>

                {/* cuerpo de la card  */}
                <div className="card-body-background card-body">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>

                {/* boton para agregar cards  */}
                <div className="card-footer">
                    <Agregador></Agregador>
                </div>

            </div>


        </div>
    )
}

export default List
