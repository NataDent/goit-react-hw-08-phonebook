import { Field, Formik } from 'formik';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { updateContact } from 'redux/contacts/operations';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').required('Required'),
  number: Yup.string()
    .min(9, 'Too Short!')
    .max(10, 'Too long!')
    .required('The field cannot be empty')
    .matches(
      /[0-9]{3}-[0-9]{2}-[0-9]{2}/,
      'Number must be in the format XXX-XX-XX'
    ),
});

export const UpdateContact = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (editedContact, actions) => {
    const existingName = contacts.find(
      contact => contact.name === editedContact.name
    );
    const existingNumber = contacts.find(
      contact => contact.number === editedContact.number
    );

    if (existingName) {
      alert('Such name  already exists');
      return;
    }
    if (existingNumber) {
      alert('Such number already exists');
      return;
    }
    dispatch(updateContact(updatedContact));
    actions.resetForm();
  };
  return (
    <Box maxW="50%" mx="auto">
      <Heading fontSize="3xl" color="brand.600" textAlign="center" mb={5}>
        Update A Contact
      </Heading>

      <Formik
        initialValues={{
          name: contact.name,
          number: contact.number,
        }}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <VStack autoComplete="true" spacing={5} m="auto" align="flex-start">
              <FormControl>
                <FormLabel htmlFor="name" color="brand.900">
                  Name
                </FormLabel>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  placeholder="Name:"
                  _placeholder={{ color: 'brand.300' }}
                  size="lg"
                  variant="outline"
                  focusBorderColor="brand.600"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="phone" color="brand.900">
                  Phone number
                </FormLabel>
                <Field
                  as={Input}
                  id="number"
                  name="number"
                  placeholder="Phone: 123-45-67"
                  _placeholder={{ color: 'brand.300' }}
                  size="lg"
                  variant="outline"
                  focusBorderColor="brand.600"
                />
                <FormErrorMessage>{errors.number}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                variant="solid"
                bgColor="brand.100"
                _hover={{ bgColor: 'brand.700', color: '#fff' }}
                mx="auto"
                color="brand.900"
              >
                Add contact
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Box>
  );
};
