import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom'

export default class UpdateCoche extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        datosCoche: [],
        status: false,
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

    updateCoche = (e) => {
        e.preventDefault();

        let id = parseInt(this.cajaId.current.value);
        let marca = this.cajaMarca.current.value;
        let modelo = this.cajaModelo.current.value;
        let conductor = this.cajaConductor.current.value;
        let imagen = this.cajaImagen.current.value;

        let coche = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen,
        }

        let request = '/api/Coches/UpdateCoche'
        let url = Global.urlApiCoches + request;

        axios.put(url, coche).then(response => {
            this.setState({
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.findCoche();
    }

    render() {
        if (this.state.status == true) {
            return(<Navigate to='/' />)
        } else {
            return (
                <div>
                    <h1>Update Coche</h1>

                    <form>
                        <label>Id coche</label>
                        <input className='form-control' type='text' ref={this.cajaId} defaultValue={this.props.id} disabled />
                        <label>Marca</label>
                        <input className='form-control' type='text' ref={this.cajaMarca} defaultValue={this.state.datosCoche.marca} />
                        <label>Modelo</label>
                        <input className='form-control' type='text' ref={this.cajaModelo} defaultValue={this.state.datosCoche.modelo} />
                        <label>Conductor</label>
                        <input className='form-control' type='text' ref={this.cajaConductor} defaultValue={this.state.datosCoche.conductor} />
                        <label>Imagen</label>
                        <input className='form-control' type='text' ref={this.cajaImagen} defaultValue={this.state.datosCoche.imagen} />
                        <button className='btn btn-success' onClick={this.updateCoche}>Update Coche</button>
                    </form>

                </div>
            )
        }

    }
}
