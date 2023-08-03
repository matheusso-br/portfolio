import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(90deg, blue, red);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodoList  = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
`;

export const List = styled.ul`
  padding: 0;
  margin-top: 30px;
`

export const Item = styled.li`
  color: #000000;
  font-size: 15px;
  font-weight: 400;
  background: #fafafa;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 60px;
  list-style-type: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  font-weight: 400;
  font-size: 15px;
  outline: none;
  padding-left: 10px;
`

export const Button = styled.button`
  background: green;
  border-radius: 5px;
  height: 40px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    opacity: 0.8;
  }  

  &:active {
    opacity: 0.6;
  }
`

export const RemoveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RemoveButton = styled.button`
  background: red;
  border-radius: 5px;
  height: 40px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }  

  &:active {
    opacity: 0.6;

  }
`