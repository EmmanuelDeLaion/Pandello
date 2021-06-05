import React, { useState } from 'react'

const TituloLista = ({titulo, IdLista}) => {

    const [tituloLista, setTituloLista] = useState(titulo);

    return (
        <div>

            <form>
                <div className="form-group">
                    <input type="text" className="form-control titulo-input" value={tituloLista} onChange={e => setTituloLista(e.target.value)} ></input>
                </div>
            </form>

        </div>
    )
}
export default TituloLista;