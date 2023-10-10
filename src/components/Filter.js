import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Container, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Container p={5} maxW="50%" m="auto">
      <Input
        placeholder="Find contacts by name:"
        _placeholder={{ color: 'brand.300' }}
        size="lg"
        variant="outline"
        focusBorderColor="brand.600"
        type="text"
        name="find"
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </Container>
  );
};
