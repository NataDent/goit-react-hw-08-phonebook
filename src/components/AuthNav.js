import { HStack } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <HStack spacing={5}>
      <ChakraLink
        as={NavLink}
        to="/register"
        fontSize={20}
        fontWeight="bold"
        color="brand.900"
        textDecoration="none"
        _hover={{ transform: 'scale(1.01)' }}
        _activeLink={{
          color: 'brand.600',
        }}
      >
        Register
      </ChakraLink>
      <ChakraLink
        as={NavLink}
        to="/login"
        fontSize={20}
        fontWeight="bold"
        color="brand.900"
        textDecoration="none"
        _hover={{ transform: 'scale(1.01)' }}
        _activeLink={{
          color: 'brand.600',
        }}
      >
        Log In
      </ChakraLink>
    </HStack>
  );
};
