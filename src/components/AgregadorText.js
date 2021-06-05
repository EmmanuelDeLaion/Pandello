import React, { useState } from 'react'

const AgregadorText = () => {


    const [titulo, setTitulo] = useState("");
    console.log(titulo);

    return (
        <div>
            <form>
                <div class="form-group m-2">
                    <textarea
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        class="form-control"
                        placeholder="Introduzca el texto"
                        id="exampleFormControlTextarea1"
                        rows="3">
                    </textarea>
                </div>

                <div className="d-flex justify-content-center">
                    <button  className="btn agregar d-block boton mt-2" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-plus"></i> Agregar</button>
                    <button className="btn cerrar d-block boton ml-2 mt-2" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">  <i class="fas fa-times-circle"></i>Cerrar</button>
                </div>
            </form>
        </div>
    )
}

export default AgregadorText
