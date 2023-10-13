import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import React from 'react';
import { createPortal } from 'react-dom';
import * as Yup from 'yup';
import { updateContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

const modalRoot = document.querySelector('#modal-root');

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

export const ModalWindow = ({ isOpen, name, number, onClose, id }) => {
  const dispatch = useDispatch();

  const handleUpdate = (editedContact, actions) => {
    dispatch(
      updateContact({ ...editedContact, id }).then(() => {
        onClose();
      })
    );
    actions.resetForm();
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return createPortal(
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Update your contact</ModalHeader>

        <ModalCloseButton />

        <ModalBody pb={6}>
          <Formik
            initialValues={{
              name,
              number,
            }}
            validationSchema={contactSchema}
            onSubmit={handleUpdate}
          >
            {() => (
              <Form autoComplete="true">
                <VStack spacing={5} m="auto" align="flex-start">
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
                    <ErrorMessage component="div" name="name" />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="number" color="brand.900">
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
                    <ErrorMessage component="div" name="name" />
                  </FormControl>
                  <Button
                    type="submit"
                    variant="solid"
                    bgColor="brand.100"
                    _hover={{ bgColor: 'brand.700', color: '#fff' }}
                    mx="auto"
                    color="brand.900"
                  >
                    Update contact
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              onClose();
            }}
            variant="solid"
            bgColor="brand.100"
            _hover={{ bgColor: 'brand.700', color: '#fff' }}
            mx="auto"
            color="brand.900"
            mr={3}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>,

    modalRoot
  );
};
