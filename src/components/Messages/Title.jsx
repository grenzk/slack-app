import React from 'react'
import { Header, Container } from '@mantine/core'
import { useStyles } from '../../assets/js/headerStyle'
import UserSelection from './UserSelection'

const Title = ({
  isNewMessage,
  setIsNewMessage,
  selectedUser,
  selectedChannel,
  setIsModalOn,
}) => {
  const { classes } = useStyles()

  const handleChannelInfo = () => {
    setIsModalOn(true)
  }

  return (
    <Header height={52.5} mb={120} className={classes.root}>
      {isNewMessage ? (
        <UserSelection />
      ) : (
        <Container className={classes.header}>
          <h1 className="title-text">
            {selectedUser
              ? selectedUser.email
              : selectedChannel
              ? selectedChannel.name
              : 'Create or Select a Channel or Direct Message'}
          </h1>
        </Container>
      )}
    </Header>
  )
}

export default Title
