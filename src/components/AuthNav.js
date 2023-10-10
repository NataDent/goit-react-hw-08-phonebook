import { HStack } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <HStack spacing={5}>
      <ChakraLink
        as={NavLink}
        to="/register"
        fontSize={10}
        fontWeight={3}
        color="brand.900"
        textDecoration="none"
        _active={{
          scale: '1.1',
          color: 'brand.700',
        }}
      >
        Register
      </ChakraLink>
      <ChakraLink
        as={NavLink}
        to="/login"
        fontSize={10}
        fontWeight={3}
        color="brand.900"
        textDecoration="none"
        _active={{
          scale: '1.1',
          color: 'brand.700',
        }}
      >
        Log In
      </ChakraLink>
    </HStack>
  );
};
