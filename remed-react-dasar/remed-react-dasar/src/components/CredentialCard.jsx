import React from "react";
import {Box, VStack, Text, IconButton} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {EditIcon, DeleteIcon} from '@chakra-ui/icons';

function CredentialCard({credential, onDelete}) {
    const navigate = useNavigate();

    return(
        <Box borderWidth={2} p={4} bg='gray.100' position='relative'>
            <VStack align="start">
                <Text>{credential.nama}</Text>
                <Text>{credential.url}</Text>
                <Text>Username: {credential.username}</Text>
                <Text>Password: {credential.password}</Text>
            </VStack>
            <Box position="absolute" bottom={2} right={1}>
                <IconButton icon={<EditIcon />} onClick={() => navigate(`/credentials/${credential.id}/edit`)}/>
                <IconButton icon={<DeleteIcon />} onClick={() => onDelete(credential.id)}/>
            </Box>
        </Box>
    );
}

export default CredentialCard