import { AGREGAR_CONTACTO, BORRAR_CONTACTO} from '../actions/contactosActions';


const inicialState = {
    contactos: [],
    numero: 0,
    persona: {}
};

var id=0

export default function contactosReducer(state = inicialState, action){
        switch (action.type) {
            case AGREGAR_CONTACTO:
                id++;
                return {
                    ...state,
                    contactos: [...state.contactos, {
                        ...action.payload, id: id 
                    } ]
                }
        
            case BORRAR_CONTACTO: 
                return{
                    ...state,
                    contactos: state.contactos.filter((contacto) => {
                        return contacto.id !== action.payload
                    })
                }
                
            default:
                return state;
        }
}