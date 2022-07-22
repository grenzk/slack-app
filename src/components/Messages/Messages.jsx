import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/User'
import { useParams } from 'react-router-dom'
import useGet from '../../api/useGet'

import ChatBox from '../MainPage/ChatBox'
import MessageInput from '../MainPage/MessageInput'
import Title from './Title'

const Messages = ({
  isNewMessage,
  setIsNewMessage,
  setIsModalOn,
  setIsChannelInfo,
  setSelectedChannel,
  selectedChannel,
}) => {
  const {
    user: { receivers },
  } = useContext(UserContext)
  const [selectedUser, setSelectedUser] = useState('')
  const { status, data } = useGet('http://206.189.91.54/api/v1/channels')
  const { id } = useParams()

  useEffect(() => {
    setSelectedUser(receivers?.find(receiver => receiver.id === parseInt(id)))
    setSelectedChannel(data?.find(channel => channel.id === parseInt(id)))
  }, [receivers, data, id, setSelectedChannel])

  return (
    <div>
      {status === 'idle' || status === 'fetching' ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="title-container">
            <Title
              isNewMessage={isNewMessage}
              setIsNewMessage={setIsNewMessage}
              selectedUser={selectedUser}
              setIsChannelInfo={setIsChannelInfo}
              selectedChannel={selectedChannel}
              setIsModalOn={setIsModalOn}
            />
          </div>
          <ChatBox
            selectedChannel={selectedChannel}
            selectedUser={selectedUser}
          />
          <MessageInput
            selectedChannel={selectedChannel}
            selectedUser={selectedUser}
          />
        </>
      )}
    </div>
  )
}

export default Messages
