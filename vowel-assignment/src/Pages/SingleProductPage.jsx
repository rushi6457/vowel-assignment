import React,{useEffect,useState} from 'react';
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
import {Box,Flex,Heading,Image,Button,Stack,Text,Center} from "@chakra-ui/react";
import {addToCart} from "../redux/cart/cartActions.js"
import { useDispatch } from 'react-redux';

const SingleProductPage = () => {
        const [quantity,setQuantity] = useState(1)
    const ref = useParams()
   const productId = ref.id
    const [product,setProduct] = useState([])
  
    const [data,setData] = useState({
        productId:productId,
      
    })
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getProduct = async() =>{
        let res = await axios.get(`https://vowel-assignment.onrender.com/getproduct/${productId}`)
        setProduct(res.data.product)
    }
    
    useEffect(()=>{
        getProduct()
    },[productId])

    const handleAddToCart = () =>{
        dispatch(addToCart(data,quantity))
        // navigate("/cart")
    }
    return (
        <Center  border='1px solid' w='80%' margin='auto' marginTop='15%' padding='20px'>
            <Flex justifyContent='center' gap='50px'>
                    <Image width='100%' src={product.image}/>
                    <Box>
                        <Heading 
                            textAlign='justify'
                            size='lg'>{product.title}</Heading>
                            <Text textAlign='justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus laborum repudiandae distinctio ex iure dolores, ut reprehenderit quis facilis tempore deleniti veniam perspiciatis omnis maxime, quidem, nostrum culpa quibusdam?
                                Impedit, nesciunt harum, obcaecati fuga iste labore, officia magnam eius aspernatur alias debitis rem ab cumque sunt consequuntur rerum at doloremque blanditiis distinctio ratione qui perspiciatis veniam. Veniam, labore eum?
                            </Text>
                        <Flex align='center' justifyContent='space-between' gap='20px' marginTop='5%'>
                            <Text 
                                fontSize='20px'
                                fontWeight='bold'
                            >{`$${product.price}`}</Text>
                              <Flex>
                                <Button fontSize='1rem'  onClick={()=>setQuantity(quantity+1)}>+</Button>
                                <Button fontSize='1rem'>{quantity}</Button>
                                <Button  fontSize='1rem' onClick={()=>setQuantity(quantity-1)}>-</Button>
                            </Flex>
                            {/* <Link to='/cart'> */}
                                <Button onClick={handleAddToCart} variant='solid' colorScheme='pink'>ADD TO CART</Button>
                            {/* </Link> */}
                        </Flex>
                    </Box>
            </Flex>
        </Center>
    );
}

export default SingleProductPage;

