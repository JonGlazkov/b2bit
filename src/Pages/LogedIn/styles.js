import styled from 'styled-components'
import { Form } from 'formik'
import { Button } from '../../Components/Button'

export const Container = styled.div`
  background-color: #f1f5f9;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonContainer = styled.div`
  height: 80px;
  width: 100vw;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
`
export const LogoutButton = styled(Button)`
  position: absolute;
  right: 0;
  margin-right: 35px;
  width: 250px;
`

export const FormContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 3em rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 350px;
  height: 320px;
`

export const UserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;

  margin-top: 15px;
`

export const UserProfile = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;

  width: 300px;
  height: auto;

  & > label span {
    font-weight: bold;
  }
`
