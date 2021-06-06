import React from 'react'

import './login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div>
                <div className="container-login">
                    <div className="content-login">
                        <h4 className="titulo-login">Iniciar Sesión</h4>
                        <form method="post">
                            <input className="form-control form-control-sm mt-5" type="text" placeholder="Correo electrónico"></input>
                            <input className="form-control form-control-sm mt-5" type="text" placeholder="Contraseña"></input>

                            <div className="d d-flex justify-content-center mt-2">
                                <Link to="/pandello" className="btn agregar w-100 mt-5">Iniciar Sesión</Link>
                            </div>
                            <br></br>
                            <div className="d d-flex justify-content-center">
                                <Link to="/register" className="a">¿No tienes cuenta? Regístrate</Link>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}

export default Login;
