import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import CreateCoche from './CreateCoche'
import UpdateCoche from './UpdateCoche'
import DetalleCoche from './DetalleCoche'
import DeleteCoche from './DeleteCoche'

export default class Router extends Component {
    render() {
        function UpdateCocheElement() {
            let { id } = useParams();
            return (<UpdateCoche id={id} />)
        }
        function DetalleCocheElement() {
            let { id } = useParams();
            return (<DetalleCoche id={id} />)
        }
        function DeleteCocheElement() {
            let { id } = useParams();
            return (<DeleteCoche id={id} />)
        }
        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create' element={<CreateCoche />} />
                    <Route path='/detalles/:id' element={<DetalleCocheElement />} />
                    <Route path='/update/:id' element={<UpdateCocheElement />} />
                    <Route path='/delete/:id' element={<DeleteCocheElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
