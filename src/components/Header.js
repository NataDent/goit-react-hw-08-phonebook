import { Box, Container } from '@chakra-ui/react';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { useAuth } from './hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="center"
      align-items="center"
      mb={10}
      borderBottom="2px"
      borderColor="brand.900"
      p={2}
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
