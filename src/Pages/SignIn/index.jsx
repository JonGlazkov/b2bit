import { useState, useContext } from "react"
import { Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

import * as Yup from 'yup';

import logo from "../../Assets/logo.png"
import Spinner from "../../Components/Spinner"
import { Button } from "../../Components/Button"
import { Input } from "../../Components/Input"
import { Context } from "../../Auth/AuthContext";

import { Container, Logo, LoginForm } from './styles'
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [apiResponse, setApiResponse] = useState(false)
  const { signIn } = useContext(Context)
  const navigate = useNavigate()

  return (
    <Container>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Logo
        src={logo}
        alt="logo-b2bit"
        className="logo"
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values) => {
          setApiResponse(true)
          try {
            await signIn(values)
            navigate('/profile')
          } catch (err) {
            toast.error(err.response.data.detail)
            console.log(err)
          }
          setApiResponse(false)
        }}
        validationSchema={
          Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().max(10).required('Password is required'),
          })
        }
      >
        {(formik) => (
          <LoginForm
          >
            <label htmlFor="email">E-mail</label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? <p>{(formik.errors.email)}</p> : null}
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="********"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? <p>{(formik.errors.password)}</p> : null}

            <Button
              type="submit"
              disabled={apiResponse}
            >
              {apiResponse ? <Spinner weight="bold" /> :
                "Sign In"
              }
            </Button>
          </LoginForm>
        )}
      </Formik>
    </Container>
  );
}