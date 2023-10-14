import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import React from 'react';
import { createPortal } from 'react-dom';
import * as Yup from 'yup';
import { updateContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import {
  AddButton,
  ErrorMessageStyled,
  FieldWrapper,
  FormStyled,
  Label,
} from './ContactForm/ContactFormStyled';

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
    dispatch(updateContact({ ...editedContact, id })).then(() => {
      onClose();
    });
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

              <AddButton type="submit">Update contact</AddButton>
            </FormStyled>
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
