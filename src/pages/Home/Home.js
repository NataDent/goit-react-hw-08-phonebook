import { Container, Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container display="flex" justifyContent="center" alignItems="center">
      <Heading fontSize="5xl" color="brand.600" textAlign="center">
        Hello! Here you can store your contacts!{' '}
        <span role="img" aria-label="Greeting icon">
          🧏‍♀️📋🖍
        </span>
      </Heading>
    </Container>
  );
};

export default Home;
