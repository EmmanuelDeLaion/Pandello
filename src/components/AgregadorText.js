import React, { useState } from 'react'

const AgregadorText = ({ type, setAbrir }) => {

    const [titulo, setTitulo] = useState("");
    console.log(titulo);

    return (
        <div>
            <form>
                <div className="form-group m-2" >
                    <textarea
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        className="textarea form-control"
                        onBlur={()=>setAbrir(false)}                        
                        placeholder={type === "card" ? "Escriba aquí la tarea" : "Escriba aquí la columna"}
                        rows="3">
                    </textarea>
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn agregar d-block boton mt-2"  ><i className="fas fa-plus"></i> {type === "card" ? "Agregar tarea" : "Agregar Columna"} </button>
                    <button className="btn cerrar d-block boton ml-2 mt-2" onClick={()=> setAbrir(false)} >  <i className="fas fa-times-circle"></i>Cerrar</button>
                </div>
            </form>
        </div>
    )
}

export default AgregadorText
