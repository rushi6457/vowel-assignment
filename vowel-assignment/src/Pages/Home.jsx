import React,{useEffect,useState} from 'react';
import axios from "axios";
import {Grid,GridItem,Image,Heading,Box,Text,Button,Flex} from "@chakra-ui/react";
import {Link} from "react-router-dom"
const Home = () => {
    let [data,setData] = useState([])
    let limit = 20;

    const getData = async () =>{
      let res = await axios.get(`https://vowel-assignment.onrender.com/getproducts?limit=${limit}`)
      setData(res.data.products)
}
    useEffect(()=>{
        getData()
    },[])
    return (
        <div>
                <Grid  templateColumns='repeat(4, 1fr)' gap='20px' padding='10'>
                    {data?.map((el)=>{
                      return (
                          <GridItem border='1px solid' padding='2'>
                            <Image width='100%' src={el.image}/>
                            <Heading size='md'>{el.title}</Heading>
                            <Flex align='center' justifyContent='space-between' marginTop='5%'>
                                <Text fontSize='1rem' fontWeight='400'>{`$ ${el.price} `}</Text>
                                <Link to={`/${el._id}`}>
                                    <Button variant='outline' colorScheme='green'>See More</Button>
                                </Link>
                            </Flex>
                        </GridItem>
                      )
                    })}
                </Grid>
        </div>
    );
}

export default Home;
