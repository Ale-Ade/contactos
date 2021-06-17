import React from 'react';
import { connect } from 'react-redux';
import {borrarContacto} from '../actions/contactosActions'




class ComponenteClase extends React.Component{
        constructor(props){
            super(props)
                this.state = {

                }
        }   
        render(){
            return (
                <div>
                <h3> Lista de Contactos </h3>
                <ul>
                {
                    this.props.listaContactos.map((contacto)=>{
                        return (
                            <div>
                                <span> # {contacto.id} </span>
                                <button onClick={ () => {this.props.borrarContacto(contacto.id) } } > X </button>
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
}

function mapStatetoProps(state){
    return {
        listaContactos: state.contactoReducer.contactos
    }
}

export default connect(mapStatetoProps, {borrarContacto})(ComponenteClase)