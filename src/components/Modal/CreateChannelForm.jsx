import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { TextInput, Text, MultiSelect, Group, Button } from '@mantine/core'

import useGet from '../../api/useGet'
import { UserContext } from '../../contexts/User'

const CreateChannelForm = ({ opened }) => {
  const { status, data } = useGet('http://206.189.91.54/api/v1/users')
  const [channelName, setChannelName] = useState('')
  const [userId, setUserId] = useState([])
  const [errors, setErrors] = useState(false)
  const [errorMessage, setErrorMessage] = useState([])
  const [channelInfo, setChannelInfo] = useState({
    name: '',
    user_ids: [],
  })
  const {
    user: { expiry, uid, accessToken, client },
  } = useContext(UserContext)
  const params = {
    expiry: expiry,
    uid: uid,
    'access-token': accessToken,
    client: client,
  }

  const handleChannelName = e => {
    setChannelName(e.target.value)
  }

  const handleCreateChannel = e => {
    e.preventDefault()

    axios
      .post('http://206.189.91.54/api/v1/channels', channelInfo, { params })
      .then(response => {
        if (response.data.errors !== undefined) {
          setErrors(true)
          setErrorMessage(response.data.errors)
        } else {
          setErrors(false)
          setChannelName('')
          setUserId('')
        }
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    setChannelInfo({
      ...channelInfo,
      name: channelName,
    })
  }, [channelName])

  return (
    <form onSubmit={e => handleCreateChannel(e)}>
      <TextInput
        sx={{ marginBottom: 20 }}
        label="Channel name"
        value={channelName}
        onChange={e => handleChannelName(e)}
      />
      <MultiSelect
        sx={{ marginBottom: 175 }}
        label="Add members"
        searchable
        limit={20}
        value={userId}
        onChange={setUserId}
        data={data.map(user => {
          const userObj = {
            value: user.id,
            label: user.email,
          }

          return userObj
        })}
        maxDropdownHeight={150}
        clearable
      />

      {errors &&
        errorMessage?.map((message, index) => (
          <Text color="red" key={index}>
            {message}
          </Text>
        ))}

      <Group grow>
        <Button type="submit">Create Channel</Button>
      </Group>
    </form>
  )
}

export default CreateChannelForm
