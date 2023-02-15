import React, { useEffect, useState } from 'react';
import styles from "../Styles/Login.module.css";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/userActions';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
      const [user,setUser] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const store = useSelector(store =>store)
    console.log(store);
    const dispatch = useDispatch()
    const handleChange = (e) =>{
    const {name,value} = e.target;

    setUser({
        ...user,[name]:value
    })
}
useEffect(()=>{
    if(store.auth.isAuth === true && store.auth.token.role === "User"){
        navigate("/cart")
    }
    else if(store.auth.isAuth === true && store.auth.token.role === "Admin"){
        navigate("/admin")
    }
},[store.auth.isAuth])
const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(login(user))
}
    return (
        <Box className={styles.loginPage}>
            <form onSubmit={handleSubmit}>
                <Container className={styles.loginPageContainer}>
                    <Heading>Login Form</Heading>
                    <FormLabel mt='4'>Email</FormLabel>
                    <Input onChange={handleChange} name='email' value={user.email}></Input>
                        <FormLabel mt='4'>Password</FormLabel>
                    <Input onChange={handleChange} name='password' value={user.password}></Input>
                    <Button type='submit' mt='8' w='100%' variant={'solid'} colorScheme='blue'>Login</Button>
                   
                </Container>
            </form>
        </Box>
    );
}

export default Login;
