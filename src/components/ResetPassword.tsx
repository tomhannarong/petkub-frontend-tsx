import React, { useContext } from 'react'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import Loader from 'react-loader-spinner'

import Modal from './modal/Modal'
import {
  FormContainer,
  Header,
  StyledForm,
  InputContainer,
  Input,
  Button,
  StyledError,
  StyledInform,
} from './SignUp'
import { RESET_PASSWORD } from '../apollo/mutations'
import { AuthContext } from '../context/AuthContextProvider'

const ResetPassword: React.FC<{ token: string }> = ({ token }) => {
  const { handleAuthAction } = useContext(AuthContext)
  const { register, handleSubmit } = useForm<{ password: string }>()

  const [resetPassword, { loading, error, data }] = useMutation<
    { resetPassword: { message: string } },
    { token: string; password: string }
  >(RESET_PASSWORD)

  const handleSubmitResetPassword = handleSubmit(async ({ password }) => {
    await resetPassword({ variables: { token, password } })
  })

  return (
    <Modal>
      <FormContainer>
        <Header>
          <h4>Enter your new password below.</h4>
        </Header>

        <StyledForm onSubmit={handleSubmitResetPassword}>
          <InputContainer>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Your password'
              ref={register('password')}
            />

          </InputContainer>

          <Button
            disabled={loading}
            style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? (
              <Loader
                type='Oval'
                color='white'
                height={30}
                width={30}
                timeout={30000}
              />
            ) : (
              'Submit'
            )}
          </Button>

          {error && (
            <StyledError>
              {error.graphQLErrors[0]?.message || 'Sorry, something went wrong'}
            </StyledError>
          )}
        </StyledForm>

        {data && (
          <StyledInform>
            <p>
              {data.resetPassword?.message}{' '}
              <span
                style={{ cursor: 'pointer', color: 'red' }}
                onClick={() => handleAuthAction('signin')}
              >
                sign in
              </span>
            </p>
          </StyledInform>
        )}
      </FormContainer>
    </Modal>
  )
}

export default ResetPassword