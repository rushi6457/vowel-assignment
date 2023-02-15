import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./userTypes";

const token = JSON.parse(localStorage.getItem("token"))

const initState = {
    isAuth:!!token,
    isLoading:false,
    isError:false,
    token:token,
    message:''
}

export const authReducer = (state=initState, {type,payload}) =>{

    switch(type){

    case LOGIN_REQUEST:{
        return {
            ...state,
            isAuth:false,
            isLoading:true,
            isError:false,
            token:''
        }
    }
    case LOGIN_SUCCESS:{
        localStorage.setItem("token",JSON.stringify(payload))
        return {
            ...state,
            isAuth:true,
            isLoading:false,
            isError:false,
            token:payload
        }
    }
    case LOGIN_FAILURE:{
        return {
            ...state,
             isAuth:false,
            isLoading:false,
            isError:true,
            token:''
        }
    }
       case LOGOUT:{
            localStorage.removeItem("token")
            return {
                   ...state,
                   isAuth:false,
                   token:'',
                   isLoading:false,
                     isError:false,
             }
         }
        default:{
            return state;
        }
    }
}
