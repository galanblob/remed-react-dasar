import React from "react";
import { Button, Box, Heading, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

function HomePage(){
    const navigate = useNavigate();

    const handleClickButton = (e) => {
        e.preventDefault();

        navigate('/credentials');
    };

    return(
        <Box>
            <Center h='600px'>
                    <Heading as="h2" size="xl" mb={5}>
                        Welcome To Password Manager
                    </Heading>
                    <Button colorScheme="green" onClick={handleClickButton}>Get Started</Button>
            </Center>
        </Box>
    )
}
export default HomePage