import { Button, Heading, Input, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Heading ontSize="4xl" color="brand.600" textAlign="center" mb={5}>
        Log In Page
      </Heading>
      <Stack
        as="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        spacing={5}
        m="auto"
        maxW="50%"
      >
        <Input
          placeholder="Email"
          type="email"
          name="email"
          size="lg"
          variant="outline"
          focusBorderColor="brand.600"
        />

        <Input
          placeholder="Password"
          _placeholder={{ color: 'brand.300' }}
          size="lg"
          variant="outline"
          focusBorderColor="brand.600"
          type="password"
          name="password"
        />

        <Button
          type="submit"
          variant="solid"
          bgColor="brand.100"
          _hover={{ bgColor: 'brand.700', color: '#fff' }}
          color="brand.900"
        >
          Log In
        </Button>
      </Stack>
    </>
  );
};
