import React from 'react'
import { TextInput } from '@mantine/core'
import { Send } from 'tabler-icons-react'

const MessageInput = () => {
  return (
    <div>
      <TextInput
        size="md"
        className="message-input"
        placeholder="Message"
        icon={<Send size={16} />}
        required
      />
    </div>
  )
}

export default MessageInput
