import { Container, Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container
      w="100%"
      h="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
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
