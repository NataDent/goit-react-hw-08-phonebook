import { Container } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container display="flex" justifyContent="center" alignItems="center">
      <Text fontSize="5xl" color="brand.600" textAlign="center">
        Hello! Here you can store your contacts!{' '}
        <span role="img" aria-label="Greeting icon">
          🧏‍♀️📋🖍
        </span>
      </Text>
    </Container>
  );
};

export default Home;
