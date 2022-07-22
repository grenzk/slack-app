import React from 'react'
import { Header, Container, ActionIcon } from '@mantine/core'
import { useStyles } from '../../assets/js/headerStyle'
import { InfoCircle } from 'tabler-icons-react'
import UserSelection from './UserSelection'
import useGet from '../../api/useGet'

const Title = ({
  isNewMessage,
  setIsNewMessage,
  selectedUser,
  setIsChannelInfo,
  selectedChannel,
  setIsModalOn,
}) => {
  const { classes } = useStyles()
  const { status, data } = useGet('http://206.189.91.54/api/v1/users')

  const handleChannelInfo = () => {
    setIsModalOn(true)
    setIsChannelInfo(true)
  }

  return (
    <Header height={56} mb={120} className={classes.root}>
      {isNewMessage ? (
        <UserSelection
          userList={data}
          status={status}
          setIsNewMessage={setIsNewMessage}
        />
      ) : (
        <Container className={classes.header}>
          <h1 className="title-text">
            {selectedUser
              ? selectedUser.email
              : selectedChannel
              ? selectedChannel.name
              : 'Start Messaging'}
          </h1>
          {selectedChannel && (
            <ActionIcon className="info-icon" radius='sm'>
              <InfoCircle color='gray' onClick={handleChannelInfo} />
            </ActionIcon>
          )}
        </Container>
      )}
    </Header>
  )
}

export default Title
