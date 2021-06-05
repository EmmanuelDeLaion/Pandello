import React, { Component } from 'react'
  

 
class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold">
                            {this.props.titulo}
                        </a>
                        <button className="ml-auto btn btn-danger"><i class="fas fa-trash"></i></button>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar;
