import { selectFilteredContacts } from 'redux/selectors';
import { Button, ContactListStyled, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ContactListStyled>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <Button type="button" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </ContactListStyled>
  );
};
