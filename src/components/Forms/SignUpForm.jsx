import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { At, Lock } from 'tabler-icons-react'
import {
  TextInput,
  Text,
  PasswordInput,
  Button,
  Group,
  Box,
} from '@mantine/core'
import usePost from '../../api/usePost'

const SignUpForm = () => {
  const [userSignUpInfo, setUserSignUpInfo] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  })
  const [errorMessage, setErrorMessage] = useState([])
  const { res, errors, handleSubmit } = usePost(
    'http://206.189.91.54/api/v1/auth',
    userSignUpInfo
  )

  let navigate = useNavigate()

  const handleChange = e => {
    const key = e.target.id
    const value = e.target.value

    setErrorMessage([])

    setUserSignUpInfo({
      ...userSignUpInfo,
      [key]: value,
    })
  }

  useEffect(() => {
    if (res?.data?.status === 'success') {
      navigate('/LoginPage')
    }
    setErrorMessage(errors.full_messages)
  }, [res, errors, navigate])

  return (
    <div>
      <Box className="login-form-container" mx="auto">
        <form onSubmit={handleSubmit}>
          <TextInput
            required
            type="email"
            id="email"
            icon={<At size={16} />}
            label="Email"
            placeholder="your@email.com"
            value={userSignUpInfo.email}
            onChange={handleChange}
          />

          <PasswordInput
            required
            icon={<Lock size={16} />}
            id="password"
            label="Password"
            placeholder="Password"
            value={userSignUpInfo.password}
            onChange={handleChange}
          />

          <PasswordInput
            required
            icon={<Lock size={16} />}
            mt="sm"
            id="password_confirmation"
            label="Confirm password"
            placeholder="Confirm password"
            value={userSignUpInfo.password_confirmation}
            onChange={handleChange}
          />

          {errorMessage?.map((message, index) => (
            <Text key={index} color="red">
              {message}
            </Text>
          ))}

          <Group position="center" mt="md">
            <Button type="submit" fullWidth>
              Sign Up
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  )
}

export default SignUpForm
