import React from 'react'
import { Avatar, Box, Text, Group } from '@mantine/core'

const ChatBox = () => {
  return (
    <div>
      <Box className="chat-container">
        <Group className="sender-container">
          <Avatar color="cyan" radius="xl">
            JD
          </Avatar>
          <div>
            <Text size="sm" weight={500}>
              John Doe
            </Text>
            <Text size="sm" color="dimmed">
              8:15pm
            </Text>
          </div>
          <div className="messages-container">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              iaculis placerat ipsum sit amet facilisis. Vestibulum volutpat
              risus eget finibus posuere. In dapibus, lorem at varius malesuada,
              leo felis volutpat ipsum, ut rutrum dolor turpis at neque. Sed
              aliquam tellus ac elit ultricies efficitur non in libero. Vivamus
              ligula orci, finibus sed augue id, tristique maximus eros. Aliquam
              sed viverra velit, nec posuere ex. Cum at dui volutpat, ornare
              lorem eu, tempor felis.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </div>
        </Group>
      </Box>
    </div>
  )
}

export default ChatBox
