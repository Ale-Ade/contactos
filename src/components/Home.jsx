import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {borrarContacto} from '../actions/contactosActions'

export default function Home(){

    const despachador = useDispatch()
    const listaContactos = useSelector(state => state.contactoReducer.contactos)

    return (
        <div>
            <h3> Lista de Contactos </h3>
            <ul>
                {
                    listaContactos.map((contacto)=>{
                        return (
                            <div>
                                <span> # {contacto.id} </span>
                                <button onClick={ () => { despachador((borrarContacto(contacto.id))) } } > X </button>
                                <p> Nombre: {contacto.nombre}  </p>
                                <p> Apellido: {contacto.apellido}</p>
                                <p> Telefono: {contacto.telefono} </p>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )

}

//function mapStatetoProps(state){
//    return {
//        listaContactos: state.contactoReducer.contactos
//    }
//}

//export default connect(mapStatetoProps)(Home)

