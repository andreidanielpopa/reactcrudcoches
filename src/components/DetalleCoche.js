import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom'

export default class DetalleCoche extends Component {
    state = {
        datosCoche: [],
    }

    findCoche = () => {
        let idCoche = parseInt(this.props.id);
        let request = '/api/Coches/FindCoche/' + idCoche;
        let url = Global.urlApiCoches + request;

        axios.get(url).then(response => {
            this.setState({
                datosCoche: response.data,
            })
        })
    }

    componentDidMount = () => {
        this.findCoche();
    }

    render() {
        return (
            <div>
                <h1>Detalle Coche</h1>
                <img src={this.state.datosCoche.imagen} alt={this.state.datosCoche.marca} style={{ width: '200px', height: '150px' }}></img>
                <ul className='list-group'>
                    <li className='list-group-item'>Id: {this.state.datosCoche.idCoche}</li>
                    <li className='list-group-item'>Marca: {this.state.datosCoche.marca}</li>
                    <li className='list-group-item'>Modelo: {this.state.datosCoche.modelo}</li>
                    <li className='list-group-item'>Conductor: {this.state.datosCoche.conductor}</li>
                </ul>
            </div>
        )
    }
}
