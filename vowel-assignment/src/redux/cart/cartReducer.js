import {ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAIL} from "./cartTypes.js";
let cartItem = JSON.parse(localStorage.getItem("cart")) || [] ;
const initState = {
    isLoading:false,
    isError:false,
    cart:cartItem,
   
}

export const cartReducer = (state=initState , {type,payload}) =>{

        switch(type){

    case ADD_TO_CART_REQUEST:{
        return {
            ...state,
            isLoading:true,
            isError:false,
            cart:[],
        }
    }
    case ADD_TO_CART_SUCCESS:{
        localStorage.setItem("cart",JSON.stringify(payload))
        return {
            ...state,
            isLoading:false,
            isError:false,
            cart:payload
        }
    }
     case ADD_TO_CART_FAIL:{
        return {
            ...state,
            isLoading:false,
            isError:true,
            cart:[]
        }
    }
   
        default:{
            return state;
        }
    }
    
}