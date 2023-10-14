import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

// export const FormWrapper = styled.div`
//   display: flex;
//   align-items: center;
// background-color: rgba(255, 99, 71, 0.01)
//   height: auto;
//   width: auto;
//   margin-bottom: 10px;
//   padding: 20px;
//   /* border: 1px solid darkgrey; */
// `;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
`;

export const InputStyled = styled(Field)`
  height: 48px;
  border: 1px solid #97266d;
  border-radius: 4px;
  border-color: #97266d;
  color: #97266d;
`;

export const Label = styled.label`
  font-size: 16px;
  display: block;
  padding: 4px 0;
  color: #f687b3;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;

export const AddButton = styled.button`
  font-weight: bold;
  margin: 8px auto;
  padding: 8px;
  background-color: #fed7e2;
  color: #521b41;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(151, 38, 109, 0.2) 0px 7px 29px 0px;
    transform: scale(1.05);
    background-color: #97266d;
    color: #fff;
  }
`;
