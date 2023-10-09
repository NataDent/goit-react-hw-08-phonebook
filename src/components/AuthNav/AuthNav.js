import { HStack } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <HStack spacing={5}>
      <ChakraLink as={NavLink} to="/register">
        Register
      </ChakraLink>
      <ChakraLink as={NavLink} to="/login">
        Log In
      </ChakraLink>
    </HStack>
  );
};
