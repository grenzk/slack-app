import React from 'react'
import loginBg from '../assets/img/website-designing.svg'
import loginBgTwo from '../assets/img/collaborate.svg'
import loginBgThree from '../assets/img/background-spot.svg'

import { TextInput, PasswordInput, Button, Group, Box } from '@mantine/core'
import { useForm } from '@mantine/form'

const LoginPage = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })
  return (
    <div>
      <Box className="login-form-container" mx="auto">
        <form onSubmit={form.onSubmit(values => console.log(values))}>
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Password"
            {...form.getInputProps('password')}
          />

          <Group position="center" mt="md">
            <Button type="submit" fullWidth>
              Login
            </Button>
          </Group>
        </form>
      </Box>
      <div>
        <img
          src={loginBg}
          className="login-bg one"
          alt="login background one"
        />
        <img
          src={loginBgTwo}
          className="login-bg two"
          alt="login background two"
        />
        <img
          src={loginBgThree}
          className="three"
          alt="login background three"
        />
      </div>
    </div>
  )
}

export default LoginPage
