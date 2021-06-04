import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>

                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand fw-bold" href="#">
                            {this.props.titulo}
                        </a>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar;
