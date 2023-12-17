import { Button, HStack, ListItem, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ModalWindow } from './Modal';
import { useState } from 'react';

export const ContactListItem = ({ _id, name, number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = _id => dispatch(deleteContact(_id));
  const toggleModal = () => setIsOpen(prev => !prev);
  console.log(_id);
  return (
    <ListItem key={_id} display="flex" justifyContent="space-between" p={1}>
      <Text fontSize={18} fontWeight="bold" color="brand.900">
        {name}: {number}
      </Text>
      <HStack gap={1}>
        <Button
          variant="solid"
          bgColor="brand.100"
          color="brand.900"
          _hover={{ bgColor: 'brand.700', color: '#fff' }}
          type="button"
          onClick={toggleModal}
        >
          Edit
        </Button>
        <Button
          variant="solid"
          bgColor="brand.100"
          color="brand.900"
          _hover={{ bgColor: 'brand.700', color: '#fff' }}
          type="button"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </Button>
      </HStack>
      {isOpen && (
        <ModalWindow
          isOpen={isOpen}
          name={name}
          number={number}
          id={_id}
          onClose={toggleModal}
        />
      )}
    </ListItem>
  );
};
