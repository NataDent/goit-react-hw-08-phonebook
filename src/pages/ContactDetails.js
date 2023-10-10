import { UpdateContact } from 'components/UpdateContact';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';

const ContactDetails = () => {
  const dispatch = useDispatch();

  useEffect(
    id => {
      dispatch(updateContact(id));
    },
    [dispatch]
  );

  return (
    <>
      <UpdateContact />
    </>
  );
};
export default ContactDetails;
