import {LOGIN, SET_USER, LOGOUT, REGISTER} from '../actions/type';
const initialState = {
    isAuthenticated:false,
    user:{}

};

export default function(state=initialState, action){
    switch(action.type){
        case REGISTER:{
            return{
                ...state
            }
        }
        case LOGOUT:
            return{
                ...state,
                isAuthenticated:false,
                user:{}
            }
        case LOGIN:
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
        case SET_USER:
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
        default:
            return state;
    }
}
