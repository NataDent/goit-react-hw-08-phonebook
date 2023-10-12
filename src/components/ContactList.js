import { selectFilteredContacts } from 'redux/contacts/selectors';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import {
  Heading,
  UnorderedList,
  ListItem,
  Button,
  Text,
  ButtonGroup,
  useDisclosure,
} from '@chakra-ui/react';

export const ContactList = () => {
  const { isOpen, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <UnorderedList
      display="flex"
      flexDirection="column"
      mt={5}
      px={5}
      maxW="50%"
      mx="auto"
    >
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
          onClick={isOpen}
        >
          <Text fontSize={18} fontWeight="bold" color="brand.900">
            {name}: {number}
          </Text>
          <ButtonGroup gap={1}>
            <Button
              variant="solid"
              bgColor="brand.100"
              color="brand.900"
              _hover={{ bgColor: 'brand.700', color: '#fff' }}
              type="button"
              onClick={onOpen}
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
