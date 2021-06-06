import React, { useState, useContext } from 'react'
import MyContextAPI from '../ContextApi';

const TituloLista = ({ titulo, listaId }) => {

    const [tituloNuevo, setTituloNuevo] = useState(titulo);
    const { actualizarTituloLista } = useContext(MyContextAPI);


    const handleBlur = () => {
         actualizarTituloLista(tituloNuevo, listaId);
    }


    return (
        <div>

            <form>
                <div className="form-group">
                    <input
                        onBlur={handleBlur}
                        className="form-control titulo-input"
                        value={tituloNuevo}
                        onChange={e => setTituloNuevo(e.target.value)} >
                    </input>
                </div>
            </form>

        </div>
    )
}
export default TituloLista;