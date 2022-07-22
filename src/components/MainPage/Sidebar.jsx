import React, { useContext } from 'react'
import { Navbar, Group, ActionIcon } from '@mantine/core'
import { Logout, MessageDots } from 'tabler-icons-react'
import useStyles from '../../assets/js/mantineStyles'
import { UserContext } from '../../contexts/User'

import Channels from '../Sidebar/Channels'
import DirectMessages from '../Sidebar/DirectMessages'

const Sidebar = ({ setIsModalOn, setIsChannelInfo, setIsNewMessage }) => {
  const { handleLogout } = useContext(UserContext)
  const { classes } = useStyles()

  const handleClick = () => {
    handleLogout()
  }

  const handleNewMessage = () => {
    setIsNewMessage(prevState => !prevState)
  }

  return (
    <div>
      <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
        <Navbar.Section grow>
          <Group className={classes.header} position="apart">
            <h2>Avion School</h2>
            <ActionIcon
              radius="sm"
              size={31}
              color="blue"
              variant="filled"
              onClick={handleNewMessage}
            >
              <MessageDots />
            </ActionIcon>
          </Group>
          <Channels
            setIsModalOn={setIsModalOn}
            setIsChannelInfo={setIsChannelInfo}
          />
          <DirectMessages />
        </Navbar.Section>

        <Navbar.Section className={classes.footer}>
          <a href="/LoginPage" className={classes.link} onClick={handleClick}>
            <Logout className={classes.linkIcon} />
            <span>Logout</span>
          </a>
        </Navbar.Section>
      </Navbar>
    </div>
  )
}

export default Sidebar
