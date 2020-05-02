import {LOGIN} from './type';

export const login = (userData) => async dispatch => {
    
   if(userData !== null){
       dispatch({
           type:LOGIN,
           payload:userData
       })
   }
}
