import React from 'react'
import { Paper, CssBaseline } from "@material-ui/core";
import TituloLista from './TituloLista';
import Card from './Card';
import Agregador from './Agregador';


const List = () => {
    return (
        <div className="root">

            <div className="card size-card">

                <div className="card-header">
                    <TituloLista></TituloLista>
                </div>

                <div className="card-body-background card-body">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>

                <div className="card-footer">
                    <Agregador></Agregador>
                </div>

            </div>


        </div>
    )
}

export default List
