import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex align="center" gap={5}>
      <Text fontSize={20}>
        Welcome,
        <Heading as="span" fontSize="xl" color="brand.600" textAlign="center">
          {` ${user.name}`}
        </Heading>
        {''}!
      </Text>
      <Link to="/profile">Profile</Link>
      <Button
        variant="solid"
        bgColor="brand.100"
        color="brand.900"
        _hover={{ bgColor: 'brand.700', color: '#fff' }}
        type="button"
        onClick={() => dispatch(logOut())}
        ml="auto"
      >
        Logout
      </Button>
    </Flex>
  );
};
