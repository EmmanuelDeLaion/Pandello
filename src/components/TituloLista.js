import React, { useState, useContext } from 'react'
import ContextApi from '../ContextApi';

const TituloLista = ({ titulo, idListas }) => {

    const [tituloLista, setTituloLista] = useState(titulo);
    const { actualizarTituloLista } = useContext(ContextApi);


    const handleBlur = () => {
        actualizarTituloLista(tituloLista, idListas);
    }


    return (
        <div>

            <form>
                <div className="form-group">
                    <input
                        onBlur={handleBlur}
                        type="text"
                        className="form-control titulo-input"
                        value={tituloLista}
                        onChange={e => setTituloLista(e.target.value)} >
                    </input>
                </div>
            </form>

        </div>
    )
}
export default TituloLista;