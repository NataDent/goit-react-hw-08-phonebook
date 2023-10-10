import { HStack } from '@chakra-ui/react';
import { useAuth } from 'components/hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HStack as="nav" spacing={5}>
      <ChakraLink
        as={NavLink}
        to="/"
        fontSize={20}
        fontWeight="bold"
        color="brand.900"
        textDecoration="none"
        _hover={{ transform: 'scale(1.01)' }}
        _activeLink={{
          color: 'brand.600',
        }}
      >
        Home
      </ChakraLink>
      {isLoggedIn && (
        <ChakraLink
          as={NavLink}
          to="/contacts"
          fontSize={20}
          fontWeight="bold"
          color="brand.900"
          textDecoration="none"
          _hover={{ transform: 'scale(1.01)' }}
          _activeLink={{
            color: 'brand.600',
          }}
        >
          Contacts
        </ChakraLink>
      )}
    </HStack>
  );
};
