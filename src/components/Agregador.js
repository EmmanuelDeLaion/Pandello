import React from 'react'
import AgregadorText from './AgregadorText';

const Agregador = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary boton" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-plus"></i> Añadir Nuevo elemento</button>
            </div>

            <div class="collapse mt-2" id="collapseExample">
                <AgregadorText></AgregadorText>
            </div>
        </div>
    )
}

export default Agregador;
