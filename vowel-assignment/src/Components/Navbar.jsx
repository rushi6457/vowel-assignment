import { Box, Button, Flex, HStack, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import styles from "../Styles/Navbar.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/userActions';

const Navbar = () => {
      let  isAuth = useSelector(store=>store.auth)
    console.log(isAuth.isAuth);
    const dispatch = useDispatch()
    const handleClick = () =>{
       
        if(isAuth){
             dispatch(logout())    
        }
        else{
            <Navigate to='/login'/>
        }
    }
    return (
        <Flex className={styles.navbar}>                           
                <Link to='/'>
                    <Image color={'white'} bg={'white'} borderRadius={'2%'} src='https://www.vowelweb.com/wp-content/uploads/2022/06/vowelweb-logo.png'></Image>
                </Link>
                <UnorderedList>
                        <Flex className={styles.rightSideFlex}>
                                <Link to={'/cart'}>
                                    <ListItem>Cart</ListItem>
                                </Link>
                                <Link to='/login'>
                                    <Button onClick={handleClick} variant={'solid'} colorScheme='red'>{isAuth.isAuth ? "Logout":"Login"}</Button>
                                </Link>
                                    <Link to='/signup'>
                                        <Button variant={'outline'} colorScheme='red'>Signup</Button>
                                    </Link>
                            </Flex>                       
                     </UnorderedList>
        </Flex>
    );
}

export default Navbar;
