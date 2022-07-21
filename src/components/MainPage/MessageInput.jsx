import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/User'
import usePost from '../../api/usePost'
import { TextInput, Button } from '@mantine/core'
import { Send } from 'tabler-icons-react'

const MessageInput = ({ selectedUser, selectedChannel }) => {
  const [messageBody, setMessageBody] = useState('')
  const [body, setBody] = useState({})
  const {
    user: { expiry, uid, accessToken, client },
  } = useContext(UserContext)

  const headers = {
    expiry: expiry,
    uid: uid,
    'access-token': accessToken,
    client: client,
  }

  const { res, handleSubmit } = usePost(
    'http://206.189.91.54/api/v1/messages',
    body,
    headers
  )

  const handleChange = e => {
    setMessageBody(e.target.value)
  }

  useEffect(() => {
    if (selectedChannel?.id) {
      setBody({
        receiver_id: selectedChannel.id,
        receiver_class: 'Channel',
        body: messageBody,
      })
    } else if (selectedUser?.id) {
      setBody({
        receiver_id: selectedUser.id,
        receiver_class: 'User',
        body: messageBody,
      })
    }
  }, [selectedChannel, selectedUser, messageBody])

  useEffect(() => {
    if (res) {
      setMessageBody('')
    }
  }, [res])

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <TextInput
          size="md"
          value={messageBody}
          onChange={handleChange}
          className="message-input"
          placeholder="Message"
          icon={<Send size={16} />}
          required
          rightSection={
            <Button size="md" className="send-btn" type="submit">
              Send
            </Button>
          }
        />
      </form>
    </div>
  )
}

export default MessageInput
