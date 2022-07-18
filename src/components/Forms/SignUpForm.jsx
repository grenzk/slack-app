import React from 'react'
import { useNavigate } from 'react-router-dom'
import { At, Lock } from 'tabler-icons-react'
import { TextInput, PasswordInput, Button, Group, Box } from '@mantine/core'
import { useForm } from '@mantine/form'

const SignUpForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  })

  let navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/LoginPage')
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

          <PasswordInput
            required
            icon={<Lock size={16} />}
            mt="sm"
            label="Confirm password"
            placeholder="Confirm password"
            {...form.getInputProps('confirmPassword')}
          />

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
