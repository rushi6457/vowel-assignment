import React,{useState} from 'react';
import {Container,Input,Button,Center,Heading} from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {useParams} from "react-router-dom"
import axios from "axios";

const Update = () => {
        const [data,setData] = useState({
            title:'',
            price:0
        })
        const ref = useParams()
        console.log(ref)
       const toastOptions = {
           position:'bottom-left',
                autoClose:8000,
                pauseOnHover:true,
                draggable:true,
                theme:'dark'
    }

    const handleUpdate = async (e) =>{
        const {name,value} = e.target; 
        setData({
            ...data,
            [name]:value
        })
        let res = await axios.put(`https://vowel-assignment.onrender.com/update/${ref.id}`,data)
       toast.success("Product information updated successfully",toastOptions)
    }
    console.log(data)
    return (
        <Center border='1px solid grey' width='40%' padding='15px' margin='auto' mt='5%' borderRadius='20px'>
               <Container>
                    <Heading> Update Product</Heading>
                    <Input type='text' name='title'   mt='4' placeholder='Update title'/>
                    <Input type='number' name='price'  mt='4' placeholder='Update price'/>
                    <Button onClick={handleUpdate} mt='4' w='100%' colorScheme='green' variant='solid'>UPDATE</Button>
                </Container> 
                <ToastContainer/>
        </Center>
    );
}

export default Update;
