import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Cart from '../Pages/Cart';
import SingleProductPage from '../Pages/SingleProductPage';
import Admin from '../Pages/Admin';
import PrivateRoute from './PrivateRoute';
import Update from '../Pages/Update';
import Payment from '../Pages/UserForm';

const AllRoutes = () => {
    return (
        <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/:id' element={<SingleProductPage/>}></Route>
                <Route path='/update/:id' element={<Update/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
                <Route path='/admin' element={<Admin/>}></Route>
                <Route path='/payment' element={<Payment/>}></Route>
        </Routes>
    );
}

export default AllRoutes;
