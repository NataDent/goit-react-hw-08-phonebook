import { Box, Container } from '@chakra-ui/react';
import { AuthNav } from './AuthNav/AuthNav';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { useAuth } from './hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      as="header"
      display="flex"
      justifyContent="center"
      align-items="center"
      mb={20}
      borderBottom="2px"
      borderColor="brand.900"
    >
      <Container
        maxW="container.lg"
        display="flex"
        justifyContent="space-between"
        align-items="center"
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Box>
  );
};
