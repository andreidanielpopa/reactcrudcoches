import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {

    state = {
        coches: [],
    }

    loadCoches = () => {
        let request = 'api/Coches';
        let url = Global.urlApiCoches + request;

        axios.get(url).then(response => {
            this.setState({
                coches: response.data,
            })
        })
    }

    componentDidMount = () => {
        this.loadCoches();
    }

    render() {
        return (
            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Modelo</th>
                            <th>Conductor</th>
                            <th>Detalles</th>
                            <th>Modificar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.coches.map((coche, index) => {
                                return (<tr key={index}>
                                    <td><img src={coche.imagen} alt={coche.marca} style={{ width: '200px', height: '150px' }}></img></td>
                                    <td>{coche.marca} {coche.modelo}</td>
                                    <td>{coche.conductor}</td>
                                    <td>
                                        <NavLink to={'/detalles/' + coche.idCoche} className='btn btn-info'>Detalles</NavLink>
                                    </td>
                                    <td>
                                        <NavLink to={'/update/' + coche.idCoche} className='btn btn-success'>Update</NavLink>
                                    </td>
                                    <td><NavLink className='btn btn-danger' to={'/delete/'+ coche.idCoche }>Delete</NavLink></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
