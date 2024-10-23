import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { NavLink, Navigate } from 'react-router-dom'

export default class DeleteCoche extends Component {
    state = {
        borrado: false,
    }

    deleteDepartamento = () => {
        let idCoche = parseInt(this.props.id);
        let request = '/api/Coches/DeleteCoche/' + idCoche;
        let url = Global.urlApiCoches + request;

        axios.delete(url).then(response => {
            this.setState({
                borrado: true,
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Delete Coche {this.props.id}</h1>
                <div>
                    <h1>Esta seguro que desea borrarlo?</h1>
                    <NavLink to={'/'} className='btn btn-info'>Volver</NavLink>
                    <button onClick={this.deleteDepartamento} className='btn btn-danger'>Eliminar</button>
                    {
                        this.state.borrado &&
                        <Navigate to='/' />
                    }
                </div>
            </div>
        )
    }
}
