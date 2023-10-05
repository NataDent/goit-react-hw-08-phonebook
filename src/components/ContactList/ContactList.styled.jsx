import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: #fff;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 4px;
`;
export const Button = styled.button`
  margin-top: 8px;
  padding: 4px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid darkgrey;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transform: scale(1.05);
    background-color: #ff99ff;
  }
`;
