import { Formik, Field } from 'formik';
import { Box, Heading } from '@chakra-ui/react';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  AddButton,
  ErrorMessageStyled,
  FieldWrapper,
  FormStyled,
  Label,
} from './ContactFormStyled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please provide the name')
    .min(2, 'Please give 2 characters long!')
    .max(15, 'The name is too long! 15 ch are allowed'),
  number: Yup.string()
    .required('The field cannot be empty')
    .min(9, 'Too Short!')
    .max(10, 'Too long!')
    .matches(
      /[0-9]{3}-[0-9]{2}-[0-9]{2}/,
      'Number must be in the format XXX-XX-XX'
    ),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (newContact, actions) => {
    const existingName = contacts.find(
      contact => contact.name === newContact.name
    );
    const existingNumber = contacts.find(
      contact => contact.number === newContact.number
    );

    if (existingName) {
      alert('Such name  already exists');
      return;
    }
    if (existingNumber) {
      alert('Such number already exists');
      return;
    }
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Box maxW="50%" mx="auto" p={5}>
      <Heading fontSize="3xl" color="brand.600" textAlign="center" mb={5}>
        Create A Contact
      </Heading>

      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <FormStyled>
          <FieldWrapper>
            <Label htmlFor="name">Name</Label>
            <Field id="name" name="name" placeholder="Jane" />
            <ErrorMessageStyled component="div" name="name" />
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="number">Number</Label>
            <Field id="number" name="number" placeholder="123-45-67" />
            <ErrorMessageStyled component="div" name="number" />
          </FieldWrapper>

          <AddButton type="submit">Add contact</AddButton>
        </FormStyled>
      </Formik>
    </Box>
  );
};
