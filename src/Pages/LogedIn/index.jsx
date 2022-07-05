import { useContext, useEffect } from 'react';

import { Formik } from 'formik';
import { Input } from '../../Components/Input';
import { Context } from '../../Auth/AuthContext';

import { Container, ButtonContainer, LogoutButton, FormContainer, UserImage, UserProfile } from './styles';
import toast from 'react-hot-toast';

export function LogedIn() {
  const { setSigned, getHeaders, signOut, user, tokens, } = useContext(Context)

  useEffect(() => {
    getHeaders()
    if (tokens.access) {
      toast.success(`Seja bem vindo, ${user?.name} !`)
      setSigned(true)
    }
  }, [getHeaders, setSigned, tokens.access, user?.name])

  return (
    <Container>
      <ButtonContainer>
        <LogoutButton
          onClick={() => signOut()}
        >
          Logout
        </LogoutButton>
      </ButtonContainer>
      <FormContainer>
        <UserImage
          src={user?.avatar?.image_high_url}
          alt='User Photo'
        />
        <Formik
          initialValues={{ name: '', email: '' }}
          onSubmit={() => { }}
        >

          <UserProfile>
            <label htmlFor="name">Your <span>Name</span></label>
            <Input
              id='name'
              type='text'
              name='name'
              placeholder={`${user?.name} ${user?.last_name}`}
              disabled
            >
            </Input>
            <label htmlFor="email">Your <span>E-mail</span></label>
            <Input
              id='email'
              type='text'
              name='email'
              placeholder={user?.email}
              disabled
            >
            </Input>
          </UserProfile>
        </Formik>
      </FormContainer>
    </Container>
  )
}