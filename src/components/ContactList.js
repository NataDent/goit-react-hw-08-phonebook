import { selectFilteredContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

import { Heading, UnorderedList } from '@chakra-ui/react';

import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

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

      {filteredContacts.map(({ _id, name, number }) => (
        <ContactListItem _id={_id} name={name} number={number} />
      ))}
    </UnorderedList>
  );
};
