import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  padding: 0;
  gap: 15px;
  justify-content: center;
  list-style: none;
  text-decoration: none;
`;

export const Button = styled.button`
  width: 120px;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
  color: rgba(79, 75, 79, 1);
  border: 1px solid grey;
  border-radius: 10px;
  background-color: aliceblue;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
`;