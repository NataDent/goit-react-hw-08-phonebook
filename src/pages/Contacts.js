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
      {isLoading && !error && <p fontSize={20}>Request in progress...</p>}
      {contacts ? <ContactList /> : <p fontSize={20}>No contacts</p>}
      {isModal && <ModalWindow onClose={toggleModal} />}
    </>
  );
};

export default Contacts;
