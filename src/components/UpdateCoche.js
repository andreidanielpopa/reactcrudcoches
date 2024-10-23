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

    render() {
        return (
            <div>
                <h1>Update Coche</h1>

                <form>
                    <label>Id coche</label>
                    <input className='form-control' type='text' ref={this.cajaId} defaultValue={this.props.id} disabled />
                    <label>Marca</label>
                    <input className='form-control' type='text' ref={this.cajaMarca} defaultValue={this.props.marca} />
                    <label>Modelo</label>
                    <input className='form-control' type='text' ref={this.cajaModelo} defaultValue={this.props.modelo} />
                    <label>Conductor</label>
                    <input className='form-control' type='text' ref={this.cajaConductor} defaultValue={this.props.conductor} />
                    <label>Imagen</label>
                    <input className='form-control' type='text' ref={this.cajaImagen} defaultValue={this.props.imagen} />
                    <button className='btn btn-success' onClick={this.updateDepartamento}>Update Departamento</button>
                </form>

            </div>
        )
    }
}
