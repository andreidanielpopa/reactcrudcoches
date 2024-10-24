import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global';
import { Navigate } from 'react-router-dom'

export default class CreateCoche extends Component {
    //El id me lo podria ahorrar porque es autoincrementado
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        status: false
    }

    insertarCoche = (e) => {
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

        let request = 'api/coches/insertcoche'
        let url = Global.urlApiCoches + request;

        axios.post(url, coche).then(response => {
            this.setState({
                status: true
            })
        })
    }

    render() {
        if (this.state.status === true) {
            return (<Navigate to='/' />)
        } else {
            return (
                <div>
                    <h1>Nuevo Departamento</h1>
                    <form>
                        <label>Id Coche</label>
                        <input className='form-control' type='text' ref={this.cajaId} />
                        <label>Marca</label>
                        <input className='form-control' type='text' ref={this.cajaMarca} />
                        <label>Modelo</label>
                        <input className='form-control' type='text' ref={this.cajaModelo} />
                        <label>Conductor</label>
                        <input className='form-control' type='text' ref={this.cajaConductor} />
                        <label>Enlace para la imagen</label>
                        <input className='form-control' type='text' ref={this.cajaImagen} />
                        <button className='btn btn-success' onClick={this.insertarCoche}>Insertar Coche</button>
                    </form>
                </div>
            )
        }
    }
}
