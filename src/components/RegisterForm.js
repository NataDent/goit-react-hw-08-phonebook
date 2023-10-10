import { Button, Heading, Input, Stack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Heading fontSize="4xl" color="brand.600" textAlign="center" mb={5}>
        Register Page
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
          placeholder="Username"
          _placeholder={{ color: 'brand.300' }}
          size="lg"
          variant="outline"
          focusBorderColor="brand.600"
          type="text"
          name="name"
        />

        <Input
          placeholder="Email"
          _placeholder={{ color: 'brand.300' }}
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
          color="brand.900"
          _hover={{ bgColor: 'brand.700', color: '#fff' }}
        >
          Register
        </Button>
      </Stack>
    </>
  );
};
