import { Box } from '@chakra-ui/react';
import { useAuth } from 'components/hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="nav">
      <ChakraLink as={NavLink} to="/">
        Home
      </ChakraLink>
      {isLoggedIn && (
        <ChakraLink as={NavLink} to="/contacts">
          Contacts
        </ChakraLink>
      )}
    </Box>
  );
};
