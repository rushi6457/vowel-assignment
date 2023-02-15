import { Button, Center } from '@chakra-ui/react';
import React, { useState } from 'react';

const Pagination = ({currentPage, onChange,total}) => {
    const [page,setPage] = useState(1)
    return (
        <div>
            <Center gap='4'>
                <Button disabled={page===1} onClick={()=>setPage(page-1)}  variant={'outline'} colorScheme={'blue'} >PREV</Button>
                <Button  variant={'outline'} colorScheme={'blue'} >{page}</Button>
                <Button onClick={()=>setPage(page+1)}  variant={'outline'} colorScheme={'blue'} >NEXT</Button>
            </Center>
        </div>
    );
}

export default Pagination;