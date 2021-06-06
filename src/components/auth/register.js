import React from 'react'

import './login.css';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="container-login">
                        <div className="content-login">
                            <h4 className="titulo-login">Regístrate</h4>
                            <form method="post">
                                <input className="form-control form-control-sm mt-5" type="text" placeholder="Correo electrónico"></input>
                                <input className="form-control form-control-sm mt-5" type="text" placeholder="Contraseña"></input>
                                <input className="form-control form-control-sm mt-5" type="text" placeholder="Confirmar Contraseña"></input>

                                <div className="d d-flex justify-content-center mt-2">
                                    <Link to="/" className="btn agregar w-100 mt-5">Registrarme</Link>
                                </div>
                                <br></br>
                                <div className="d d-flex justify-content-center">
                                    <Link to="/" className="a">Ya tengo cuenta, iniciar sesión</Link>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Register;
