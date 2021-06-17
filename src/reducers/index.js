import contactoReducer from './contactosReducer';
import amigosReducer from './amigosReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({contactoReducer, amigosReducer})

export default rootReducer