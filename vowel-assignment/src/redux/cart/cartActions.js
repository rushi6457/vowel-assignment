import {ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAIL} from "./cartTypes.js";
export const addToCart = (data) => async(dispatch) =>{

    dispatch({type:ADD_TO_CART_REQUEST})
    try{
       await dispatch({type:ADD_TO_CART_SUCCESS,payload:data})
    }
    catch(error){
          dispatch({type:ADD_TO_CART_FAIL})
    }
}