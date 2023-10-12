import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { ModalWindow } from 'components/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setIsModal(isModal === !isModal);
  };

  return (
    <>
      <ContactForm />

      <Filter />
      {isLoading && !error && (
        <b fontSize={20} color="brand.900">
          Request in progress...
        </b>
      )}
      {contacts ? (
        <ContactList />
      ) : (
        <b fontSize={20} color="brand.900">
          No contacts
        </b>
      )}
      {isModal && <ModalWindow onClose={toggleModal} />}
    </>
  );
};

export default Contacts;