import React,{useEffect,useState} from 'react';
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
import {Box,Flex,Heading,Image,Button,Stack,Text,Center} from "@chakra-ui/react";
import {addToCart} from "../redux/cart/cartActions.js"
import { useDispatch,useSelector } from 'react-redux';
const Cart = () => {
    const [count,setCount] = useState(1)
    const {cart} = useSelector(cart=>cart.cart)
    const navigate = useNavigate()
    return (
           <Center  border='1px solid' w='60%' margin='auto' marginTop='15%' padding='20px'>
            <Flex justifyContent='center' gap='50px' w='100%'>
                    <Image width='100%' src={cart.image}/>
                    <Box>
                        <Heading 
                            textAlign='justify'
                            size='lg'>{cart.title}</Heading>
                        <Flex align='center' justifyContent='space-between' gap='20px' marginTop='5%'>
                            <Text 
                                fontSize='20px'
                                fontWeight='bold'
                            >{`$${cart.price}`}</Text>
                            <Flex>
                                <Button fontSize='1rem'  onClick={()=>setCount(count+1)}>+</Button>
                                <Button fontSize='1rem'>{count}</Button>
                                <Button disabled={count === 1} fontSize='1rem' onClick={()=>setCount(count-1)}>-</Button>
                            </Flex>
                        </Flex>
                        <Button onClick={()=>navigate("/payment")} marginTop='5%' variant='solid' colorScheme='red'>Proceed to payment</Button>
                    </Box>
            </Flex>
        </Center>
    );
}

export default Cart;
