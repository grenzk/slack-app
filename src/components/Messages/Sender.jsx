import { Avatar, Text, Group } from '@mantine/core'

const Sender = ({ message }) => {
  const { date, messages } = message
  let fullDate
  let time

  return (
    <>
      {messages.map(message => {
        fullDate = new Date(message.created_at)
        time = fullDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
        return (
          <Group
            className="sender-container"
            key={message.id}
            direction="column"
            spacing={3}
          >
            <Group>
              <Avatar color="cyan" radius="xl">
                {message.sender.email.charAt(0).toUpperCase()}
              </Avatar>
              <div>
                <Text size="sm" weight={500}>
                  {message.sender.email}
                </Text>
                <Group>
                  <Text size="sm" color="dimmed">
                    {time}
                  </Text>
                  <Text size="sm" color="dimmed" className="date-text">
                    {date}
                  </Text>
                </Group>
              </div>
            </Group>
            <Group className="messages-container">
              <Text>{message.body}</Text>
            </Group>
          </Group>
        )
      })}
    </>
  )
}

export default Sender
