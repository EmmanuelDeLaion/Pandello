import React, { useState } from 'react'
import AgregadorText from './AgregadorText';

const Agregador = ({ type, listaId, }) => {
    
    const [abrir, setAbrir] = useState(false);

    return (
        <div>
            <div className={!abrir ? "d-flex justify-content-center" : "hidden"} >
                <button onClick={() => setAbrir(true)} className={type === "card" ? "btn btn-primary boton" : "btn boton agregar"}  ><i className="fas fa-plus"></i>
                    {
                        type === "card" ? "Agregar nuevo elemento" : "Agregar nueva columna"
                    }
                </button>
            </div>

            <div className={abrir ? "mt-2" : "hidden"}  >
                <AgregadorText type={type} setAbrir={setAbrir} listaId={listaId} ></AgregadorText>
            </div>

        </div>
    )
}

export default Agregador;
