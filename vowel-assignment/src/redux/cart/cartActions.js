import axios from "axios";
import {ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAIL} from "./cartTypes.js";
export const addToCart = (data,quantity) => async(dispatch) =>{
    
    dispatch({type:ADD_TO_CART_REQUEST})
    try{
        let res = await axios.post(`http://localhost:5000/cart`,data,quantity)
        console.log(res);
      dispatch({type:ADD_TO_CART_SUCCESS,payload:res.data})
    }
    catch(error){
          dispatch({type:ADD_TO_CART_FAIL})
    }
}