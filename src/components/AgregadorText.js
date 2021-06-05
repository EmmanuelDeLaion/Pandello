import React, {useState} from 'react'

const AgregadorText = () => {


    const [titulo, setTitulo] = useState("");
    console.log(titulo);

    return (
        <div>
            <form>
                <div class="form-group">
                    <textarea 
                    value={titulo} 
                    onChange={ e => setTitulo(e.target.value) } 
                    class="form-control" 
                    placeholder="Introduzca el texto" 
                    id="exampleFormControlTextarea1" 
                    rows="3">
                    </textarea>
                </div>
            </form>
        </div>
    )
}

export default AgregadorText
