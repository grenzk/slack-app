import React from 'react'
import { useNavigate } from 'react-router-dom'
import { At, Lock } from 'tabler-icons-react'
import { TextInput, PasswordInput, Button, Group, Box } from '@mantine/core'
import { useForm } from '@mantine/form'

const LoginForm = () => {
  const form = useForm({
    initialValues: {
      email: 'johnsmith@example.com',
      password: '123456',
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  let navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/MainPage')
  }

  return (
    <div>
      <Box className="login-form-container" mx="auto">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            required
            icon={<At size={16} />}
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />

          <PasswordInput
            required
            icon={<Lock size={16} />}
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
    </div>
  )
}

export default LoginForm
