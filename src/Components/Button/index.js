import styled from 'styled-components'

export const Button = styled.button`
  background-color: #02274f;
  color: white;

  border-radius: 10px;
  border-style: none;

  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 45px;
  width: 330px;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    background-color: #021532;
    transition: all ease-in-out 0.3s;
  }
  &:disabled {
    background-color: #02274f;
    cursor: not-allowed;
  }
`
