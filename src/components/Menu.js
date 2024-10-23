import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>Concesionario</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample03">
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/create'>Crear</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/detalles'>Detalle</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
