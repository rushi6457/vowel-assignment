import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let  isAuth = useSelector(store=>store.auth)
    let {pathName} = useLocation()

    if(isAuth.isAuth){
            return children
    }
    else{
        return (
            <Navigate
            to={'/login'}
            state={{from: pathName}}
            replace
            />
        )
    }
}

export default PrivateRoute;
