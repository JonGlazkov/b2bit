import { Form } from "formik"
import styled from "styled-components"

export const Container = styled.div`
  background-color: #FFF;
  box-shadow: 0 0 3em rgba(0, 0, 0, 0.25);;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 375px;
  height: 460px;
`
export const Logo = styled.img`
  height: 120px;
  width: 300px;
  margin-block: 30px;
`
export const LoginForm = styled(Form)`
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content:space-between ;
  gap: 5px;

  &>label {
    font-weight: 700;
    margin-block: 2px;
  }
  &>p {
    font-size: 11px;
    font-style: italic;
    font-weight: 600;
    color: red;
    line-height: 4px;
  }
`
