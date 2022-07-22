import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { UserContext } from '../../contexts/User'
import useGet from '../../api/useGet'

const ChannelDetails = ({ selectedChannel, changeModalName }) => {
  const { status, data } = useGet('http://206.189.91.54/api/v1/users')
  const [channelInfo, setChannelInfo] = useState({})
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

  const handleNewMembers = () => {
    setIsAddNewMember(true)
  }

  const handleAddMember = userID => {
    const body = {
      id: channelInfo.id,
      member_id: userID,
    }
    axios.post('http://206.189.91.54/api/v1/channel/add_member', body, {
      params,
    })

    setIsAddNewMember(false)
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
      <h3>{channelInfo.name}</h3>
    </div>
  )
}

export default ChannelDetails
