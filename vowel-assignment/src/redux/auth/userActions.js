import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./userTypes"
import axios from "axios";

export const login = (creds) => async (dispatch) =>{

    dispatch({type:LOGIN_REQUEST})
    try {
        let res = await axios.post(`http://localhost:5000/login`,creds)
        console.log(res.data);
        dispatch({type:LOGIN_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:LOGIN_FAILURE})
    }
}
export const logout = () =>({type:LOGOUT})