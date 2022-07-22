import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { UserContext } from '../../contexts/User'
import { Text, MultiSelect, Button, Group } from '@mantine/core'
import useGet from '../../api/useGet'

const ChannelDetails = ({ selectedChannel }) => {
  const { status, data } = useGet('http://206.189.91.54/api/v1/users')
  const [channelInfo, setChannelInfo] = useState({})
  const [userId, setUserId] = useState([])
  const [channelMembers, setChannelMembers] = useState([])
  const [isAddNewMember, setIsAddNewMember] = useState(false)
  const { id } = selectedChannel

  const {
    user: { expiry, uid, accessToken, client },
  } = useContext(UserContext)

  const params = {
    expiry: expiry,
    uid: uid,
    'access-token': accessToken,
    client: client,
  }
  const ownerInfo = data?.find(user => channelInfo?.owner_id === user.id)

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }

  const date = new Date(channelInfo?.created_at).toLocaleDateString(
    'en-US',
    options
  )

  const handleSubmit = e => {
    e.preventDefault()

    const body = {
      id: channelInfo.id,
      member_id: userId[0],
    }
    axios.post('http://206.189.91.54/api/v1/channel/add_member', body, {
      params,
    })

    setUserId('')
  }

  useEffect(() => {
    const getChannelInfo = async () => {
      const {
        data: { data },
      } = await axios.get(`http://206.189.91.54/api/v1/channels/${id}`, {
        params,
      })
      setChannelInfo(data)
    }
    getChannelInfo()
  }, [data, id, params])

  useEffect(() => {
    const getMembersById = () => {
      const { channel_members } = channelInfo
      const groupedMembers = data?.filter(user =>
        channel_members?.find(member => member.user_id === user.id)
      )
      setChannelMembers(groupedMembers)
    }

    getMembersById()
  }, [data, channelInfo])

  return (
    <div>
      <Text>Name: {channelInfo.name}</Text>
      <Text>Owner: {ownerInfo?.uid}</Text>
      <Text sx={{ marginBottom: 20 }}>
        Date Created: {date !== 'Invalid Date' && date}
      </Text>
      <form onSubmit={e => handleSubmit(e)}>
        <MultiSelect
          sx={{ marginBottom: 20 }}
          limit={20}
          label="Add Members"
          value={userId}
          onChange={setUserId}
          maxDropdownHeight={150}
          maxSelectedValues={1}
          searchable
          clearable
          data={data.map(user => {
            const userObj = {
              value: user.id,
              label: user.email,
            }

            return userObj
          })}
        />
        <Text>Members:</Text>
        <div style={{marginBottom: 100}} className='members-container'>
          {channelMembers.length === 0 ? (
            <div>Loading ...</div>
          ) : (
            channelMembers.map(member => (
              <Text key={member.id}>{member.uid}</Text>
            ))
          )}
        </div>
        <Group position="right">
          <Button type="submit">Add Member</Button>
        </Group>
      </form>
    </div>
  )
}

export default ChannelDetails
