import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import CreateCoche from './CreateCoche'
import UpdateCoche from './UpdateCoche'

export default class Router extends Component {
    render() {
        function UpdateCocheElement() {
            let { id, marca, modelo, conductor, imagen } = useParams();
            return (<UpdateCoche id={id} marca={marca} modelo={modelo} conductor={conductor} imagen={imagen} />)
        }
        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create' element={<CreateCoche />} />
                    {/* <Route path='/detalles/:iddepartamento' element={<DetalleDepartamentoElement />} /> */}
                    <Route path='/update/:id/:marca/:modelo/:conductor/:imagen' element={<UpdateCocheElement />} />
                    {/* <Route path='/delete/:id' element={<DeleteDepartamentoeElement />} /> */}
                </Routes>
            </BrowserRouter>
        )
    }
}
