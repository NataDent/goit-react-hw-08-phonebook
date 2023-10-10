import { selectFilteredContacts } from 'redux/contacts/selectors';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Helmet } from 'react-helmet';
import {
  Heading,
  UnorderedList,
  ListItem,
  Button,
  Text,
} from '@chakra-ui/react';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <UnorderedList display="flex" flexDirection="column" mt={5}>
      <Helmet>
        <Heading
          fontSize="3xl"
          color="brand.600"
          textAlign="center"
          mb={5}
          bgColor="#fff"
        >
          Your contacts
        </Heading>
      </Helmet>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          display="flex"
          justifyContent="space-between"
          p={1}
          listStyle="none"
        >
          <Text>
            {name}: {number}
          </Text>
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
        </ListItem>
      ))}
    </UnorderedList>
  );
};
