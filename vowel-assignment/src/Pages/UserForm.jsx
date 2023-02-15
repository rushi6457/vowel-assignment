import {Center,VStack,Container,Input,Heading,Stack,Box,Button, Flex} from "@chakra-ui/react";

const Payment = () =>{

    return (
        <Center>
            <Container border='1px solid red' marginTop='5%' padding='20px' borderRadius='15px' bg='black'>
                <VStack>
                    <Heading color='white'>User Information</Heading>
                    <Input borderColor='blue' colorScheme='white' type='text' placeholder='Enter name'/>
                    <Input borderColor='blue' colorScheme='white' type='text' placeholder='Enter Email'/>
                    <Input borderColor='blue' colorScheme='white' type='text' placeholder='Enter Address'/>
                    <Input borderColor='blue' colorScheme='white' placeholder='Enter Pincode' type='number'/>
                    <Input borderColor='blue' colorScheme='white' type='text' placeholder='Enter City'/>
                    <Button w='100%' colorScheme='red' variant='outline'>Add Address</Button>
                </VStack>
            </Container>
        </Center>
    )
}

export default Payment