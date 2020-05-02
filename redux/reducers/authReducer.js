import {LOGIN} from '../actions/type';
const initialState = {
    isAuthenticated:false,
    user:{}

};

export default function(state=initialState, action){
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
        default:
            return state;
    }
}
