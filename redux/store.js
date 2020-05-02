import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index'
const initialState = {};
import thunk from 'redux-thunk';
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);


export default store

