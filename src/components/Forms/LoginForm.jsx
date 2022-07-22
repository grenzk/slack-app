import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { At, Lock } from 'tabler-icons-react'
import {
  TextInput,
  Text,
  PasswordInput,
  Button,
  Group,
  Box,
  Anchor,
} from '@mantine/core'
import { UserContext } from '../../contexts/User'
import usePost from '../../api/usePost'

const LoginForm = () => {
  const [userLoginInfo, setUserLoginInfo] = useState({
    email: '',
    password: '',
  })
  const [errorMessage, setErrorMessage] = useState([])
  const { res, errors, handleSubmit } = usePost(
    'http://206.189.91.54/api/v1/auth/sign_in',
    userLoginInfo
  )
  const { user, handleLogin } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.data && res?.headers) {
      const {
        data: {
          data: { email, uid },
        },

        headers: { 'access-token': accessToken, client, expiry },
      } = res

      handleLogin(uid, accessToken, client, email, expiry)
    }

    setErrorMessage(errors)
  }, [res, errors, handleLogin])

  const handleClick = () => {
    navigate('/SignUpPage')
  }

  const handleChange = e => {
    const key = e.target.id
    const value = e.target.value

    setErrorMessage([])

    setUserLoginInfo({
      ...userLoginInfo,
      [key]: value,
    })
  }

  if (user?.isLoggedIn) {
    return <Navigate to="/MainPage" />
  }

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
            value={userLoginInfo.email}
            onChange={handleChange}
          />

          <PasswordInput
            required
            id="password"
            icon={<Lock size={16} />}
            label="Password"
            placeholder="Password"
            value={userLoginInfo.password}
            onChange={handleChange}
          />

          {errorMessage?.map((message, index) => (
            <Text key={index} color="red">
              {message}
            </Text>
          ))}

          <Group position="apart" mt="md">
            <Anchor
              component="button"
              type="button"
              color="gray"
              onClick={handleClick}
              size="sm"
            >
              Don't have an account? Register
            </Anchor>
            <Button type="submit">Login</Button>
          </Group>
        </form>
      </Box>
    </div>
  )
}

export default LoginForm
