
import {TodoReducer} from './TodoReducer';
import {combineReducers} from 'redux';

export const RootReducer= combineReducers({todo:TodoReducer});