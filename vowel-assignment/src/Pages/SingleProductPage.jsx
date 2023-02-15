import React,{useEffect,useState} from 'react';
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
import {Box,Flex,Heading,Image,Button,Stack,Text,Center} from "@chakra-ui/react";
import {addToCart} from "../redux/cart/cartActions.js"
import { useDispatch } from 'react-redux';

const SingleProductPage = () => {
    const ref= useParams()
    const [product,setProduct] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getProduct = async() =>{
        let res = await axios.get(`https://vowel-assignment.onrender.com/getproduct/${ref.id}`)
        setProduct(res.data.product)
    }
    useEffect(()=>{
        getProduct()
    },[ref.id])

    const handleAddToCart = (data) =>{
        dispatch(addToCart(data))
        navigate("/cart")
    }
    return (
        <Center  border='1px solid' w='60%' margin='auto' marginTop='15%' padding='20px'>
            <Flex justifyContent='center' gap='50px'>
                    <Image width='100%' src={product.image}/>
                    <Box>
                        <Heading 
                            textAlign='justify'
                            size='lg'>{product.title}</Heading>
                        <Flex align='center' justifyContent='space-between' gap='20px' marginTop='5%'>
                            <Text 
                                fontSize='20px'
                                fontWeight='bold'
                            >{`$${product.price}`}</Text>
                            {/* <Link to='/cart'> */}
                                <Button onClick={()=>handleAddToCart(product)} variant='solid' colorScheme='pink'>ADD TO CART</Button>
                            {/* </Link> */}
                        </Flex>
                    </Box>
            </Flex>
        </Center>
    );
}

export default SingleProductPage;

