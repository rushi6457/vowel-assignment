import React,{useEffect,useState} from 'react';
import axios from "axios";
import {Grid,GridItem,Image,Heading,Box,Text,Button,Flex} from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import {Link,useNavigate} from "react-router-dom"
const Admin = () => {
     let [data,setData] = useState([])
    let limit = 20;
    const navigate = useNavigate()
    const getData = async () =>{
      let res = await axios.get(`https://vowel-assignment.onrender.com/getproducts?limit=${limit}`)
      setData(res.data.products)
}
   const toastOptions = {
           position:'bottom-left',
                autoClose:8000,
                pauseOnHover:true,
                draggable:true,
                theme:'dark'
    }
    useEffect(()=>{
        getData()
    },[data])

    const handleDelete= async(id) =>{
            
            await axios.delete(`http://localhost:5000/deleteProduct/${id}`)
            toast.success("Product deleted successfully ")
            setData(data.filter((el)=>el.id !== id))
    }
    const handleUpdate = (id) =>{
            navigate(`/update/${id}`)
    }
    return (
         <div>
                <Grid  templateColumns='repeat(4, 1fr)' gap='20px' padding='10'>
                    {data?.map((el)=>{
                      return (
                          <GridItem border='1px solid' padding='2'>
                            <Image width='100%' src={el.image}/>
                            <Heading size='md'>{el.title}</Heading>
                                <Text fontSize='1rem' fontWeight='400'>{`$ ${el.price} `}</Text>
                            <Flex align='center' justifyContent='space-between' marginTop='5%' gap='15px'>
                                    <Button onClick={()=>handleDelete(el._id)} variant='solid' colorScheme='red'>DELETE</Button>
                                    <Button onClick={()=>handleUpdate(el._id)} variant='solid' colorScheme='blue'>UPDATE</Button>
                            </Flex>
                        </GridItem>
                      )
                    })}
                </Grid>
                <ToastContainer/>
        </div>
    );
}

export default Admin;
