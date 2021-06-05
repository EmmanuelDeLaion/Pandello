import React, { useState, useContext } from 'react'
import contextAPI from '../ContextAPI';

const AgregadorText = ({ type, setAbrir, listaId }) => {

    const { agregarCard, agregarColumna } = useContext(contextAPI);
    const [titulo, setTitulo] = useState("");
 

    const agregarCardOLista = () => {
        if (type === "card") {
            agregarCard(titulo, listaId);
        } else {
            agregarColumna(titulo);
        }
        setTitulo("");
    }

    return (
        <div>
            <form>
                <div className="form-group m-2" >
                    <textarea
                        onChange={e => setTitulo(e.target.value)}
                        value={titulo}
                        className="textarea form-control"
                        placeholder={type === "card" ? "Escriba aquí la tarea" : "Escriba aquí la columna"}
                        rows="3">
                    </textarea>
                </div>

                <div className="d-flex justify-content-center">

                    {/* boton agregar tarea o columna  */}
                    <button 
                        onClick={titulo === "" ? "" : agregarCardOLista}
                        className="btn agregar d-block boton mt-2">
                        <i className="fas fa-plus"></i>
                        {type === "card" ? "Agregar tarea" : "Agregar Columna"}
                    </button>


                    {/* boton cerrar  */}
                    <button
                        onClick={() => setAbrir(false)}
                        className="btn cerrar d-block boton ml-2 mt-2">
                        <i className="fas fa-times-circle"></i>
                        Cerrar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AgregadorText
