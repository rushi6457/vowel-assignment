import React, { useEffect, useState } from 'react';
import styles from "../Styles/Signup.module.css";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/auth/userActions';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Signup = () => {
    const [user,setUser] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()
     
   const toastOptions = {
           position:'bottom-left',
                autoClose:8000,
                pauseOnHover:true,
                draggable:true,
                theme:'dark'
    }

const handleChange = (e) =>{
    const {name,value} = e.target;

    setUser({
        ...user,[name]:value
    })
}

const handleSubmit= async(e) =>{
    e.preventDefault()
     let res = await axios.post(`https://vowel-assignment.onrender.com/signup`,user)
    
    if(res.data.status === false){
        toast.error(res.data.message,toastOptions)
    }
    else{
            navigate("/login")
    }
} 
    return (
        <Box className={styles.signupPage}>
            <form onSubmit={handleSubmit}>
                <Container className={styles.signupPageContainer}>
                    <Heading>Signup Form</Heading>
                    <FormLabel mt='4'>Email</FormLabel>
                    <Input name='email' type={user.email} onChange={handleChange}></Input>
                        <FormLabel mt='4'>Password</FormLabel>
                    <Input name='password' type={user.password} onChange={handleChange}></Input>
                    <Button type='submit' mt='8' w='100%' variant={'solid'} colorScheme='blue'>Signup</Button>
                     <Text textAlign={'justify'} mt='2'>Already an user? <Link to='/login'>Login </Link> here</Text>
                </Container>
            </form>
            <ToastContainer/>
        </Box>
    );
}

export default Signup;
