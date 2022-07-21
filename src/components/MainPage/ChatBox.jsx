import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../../contexts/User'
import { Box } from '@mantine/core'
import Sender from '../Messages/Sender'

const ChatBox = ({ selectedUser, selectedChannel }) => {
  const [messagesData, setMessagesData] = useState([])
  const {
    user: { expiry, uid, accessToken, client },
  } = useContext(UserContext)

  const getMessages = async (id, receiver, params) => {
    let {
      data: { data },
    } = await axios.get(
      `http://206.189.91.54/api/v1/messages?receiver_id=${id}&receiver_class=${receiver}`,
      { params }
    )

    setMessagesData(data)
  }

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }

  const messages = messagesData?.reduce((filteredMessages, message) => {
    const date = message =>
      new Date(message).toLocaleDateString('en-US', options)

    if (!filteredMessages[date(message?.created_at)]) {
      filteredMessages[date(message?.created_at)] = [message]
    } else {
      filteredMessages[date(message?.created_at)].push(message)
    }

    return filteredMessages
  }, {})

  let newMessages
  if (messages !== undefined || null) {
    newMessages = Object.keys(messages).map(date => {
      return {
        date,
        messages: messages[date],
      }
    })
  }

  useEffect(() => {
    const params = {
      expiry: expiry,
      uid: uid,
      'access-token': accessToken,
      client: client,
    }

    const interval = setInterval(() => {
      if (selectedChannel) {
        getMessages(selectedChannel?.id, 'Channel', params)
      } else {
        getMessages(selectedChannel?.id, 'User', params)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [selectedChannel, expiry, uid, accessToken, client])

  return (
    <div>
      <Box className="chat-container">
        {newMessages?.length > 0 &&
          newMessages.map(message => (
            <Sender key={message.date} message={message} />
          ))}
      </Box>
    </div>
  )
}

export default ChatBox
