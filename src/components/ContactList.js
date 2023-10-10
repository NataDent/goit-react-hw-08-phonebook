import { selectFilteredContacts } from 'redux/contacts/selectors';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contacts/operations';

import {
  Heading,
  UnorderedList,
  ListItem,
  Button,
  Text,
  ButtonGroup,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const handleUpdate = id => dispatch(updateContact(id));
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <UnorderedList display="flex" flexDirection="column" mt={5} px={10}>
      <Heading fontSize="3xl" color="brand.600" textAlign="center" mb={5}>
        Your Contacts
      </Heading>

      {filteredContacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          display="flex"
          justifyContent="space-between"
          p={1}
          listStyle="none"
        >
          <Text fontSize={18} fontWeight="bold" color="brand.900">
            {name}: {number}
          </Text>
          <ButtonGroup gap="4">
            <Button
              as={NavLink}
              variant="solid"
              bgColor="brand.100"
              color="brand.900"
              _hover={{ bgColor: 'brand.700', color: '#fff' }}
              type="button"
              onClick={() => handleUpdate(id)}
            >
              Edit
            </Button>
            <Button
              variant="solid"
              bgColor="brand.100"
              color="brand.900"
              _hover={{ bgColor: 'brand.700', color: '#fff' }}
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
          </ButtonGroup>
        </ListItem>
      ))}
    </UnorderedList>
  );
};
