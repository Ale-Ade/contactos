import React from 'react';
import './NavBar.css'
import { Link, NavLink } from "react-router-dom"

export default function Home(){

    return (
        <nav className='NavBar'>
                <NavLink exact to="/" activeClassName='active' className='navLink'>
                        Contactos Home    
                </NavLink>
                
                <NavLink to="/componenteClase" activeClassName='active'
                className='navLink'>
                        Componente de Clase
                </NavLink>
                
                <NavLink to='/componenteFuncional'
                activeClassName='active'
                className='navLink'>
                    <span >
                        Componente Funcional
                    </span>
                </NavLink>
                
        </nav>
    )

}