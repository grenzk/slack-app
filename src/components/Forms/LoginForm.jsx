import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { At, Lock } from 'tabler-icons-react'
import {
  TextInput,
  Text,
  PasswordInput,
  Button,
  Group,
  Box,
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

  const handleChange = e => {
    const key = e.target.id
    const value = e.target.value

    setErrorMessage([])

    setUserLoginInfo({
      ...userLoginInfo,
      [key]: value,
    })
  }

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

          <Group position="center" mt="md">
            <Button type="submit" fullWidth>
              Login
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  )
}

export default LoginForm
