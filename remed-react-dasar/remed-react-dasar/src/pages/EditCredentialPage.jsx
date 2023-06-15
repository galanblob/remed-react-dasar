import {useState} from "react";
import {Heading, VStack,Box, FormControl, FormLabel, Input, Button} from '@chakra-ui/react';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function EditCredentialPage(){
    const navigate = useNavigate();
    const params = useParams();

    const fetchDetailById = async (id) => {
        try{
            const response = await fetch(`http://localhost:3366/credentials/${params.id}`)
            const data = await response.json();

            setNama(data.nama);
            setUrl(data.url);
            setUsername(data.username);
            setPassword(data.password);
        }
        catch (error){
            console.log(error);
        }
    };
    useEffect(() => {
        fetchDetailById(params.id)
    }, []);

    const[nama, setNama] = useState('');
    const[url, setUrl] = useState('');
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await fetch(`http://localhost:3366/credentials/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nama: nama,
                    url: url,
                    username: username,
                    password: password,
                }),
            }) ;
            navigate('/credentials')
        }
        catch(error){
            console.error(error);
        }
    }
    return(
        <VStack spacing={4} w='100%'>
            <Heading as='h2' size='xl'>
                Edit Credentials
            </Heading>
            <Box w="80%">
                <form onSubmit={handleSubmit}>
                    <VStack>
                        <FormControl>
                            <FormLabel>Nama</FormLabel>
                            <Input type='text' placeholder='Please enter name' w="100%" onChange={(e) => setNama(e.target.value)} value={nama}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>URL</FormLabel>
                            <Input type='text' placeholder='Please enter url' w="100%" onChange={(e) => setUrl(e.target.value) } value={url}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input type='text' placeholder='Please enter username' w="100%" onChange={(e) => setUsername(e.target.value)} value={username}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type='text' placeholder='Please enter password' w="100%" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </FormControl>
                        <Button colorScheme='blue' w='100%' type="submit">
                            Edit Credential
                        </Button>
                    </VStack>
                </form>
            </Box>
        </VStack>
    )
}
export default EditCredentialPage