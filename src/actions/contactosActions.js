export const AGREGAR_CONTACTO = 'AGREGAR_CONTACTO';
export const BORRAR_CONTACTO = 'BORRAR_CONTACTO';


export function agregarContacto(info){
        return {
            type: AGREGAR_CONTACTO,
            payload: info
        }
}

export function borrarContacto(id){
        return {
            type: BORRAR_CONTACTO,
            payload: id
        }
}