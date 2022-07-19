import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/User'
import { Navigate } from 'react-router-dom'
import { Modal, TextInput, MultiSelect, Group, Button } from '@mantine/core'
import Sidebar from '../components/MainPage/Sidebar'
import ChatBox from '../components/MainPage/ChatBox'
import TopHeader from '../components/MainPage/TopHeader'
import MessageInput from '../components/MainPage/MessageInput'

import { modalData } from '../components/Modal/modalData'

const MainPage = () => {
  const [isModalOn, setIsModalOn] = useState(false)
  const {
    user: { isLoggedIn },
  } = useContext(UserContext)

  if (!isLoggedIn) {
    return <Navigate to="/LoginPage" />
  }

  return (
    <div>
      <TopHeader />
      <Sidebar setIsModalOn={setIsModalOn} />
      <ChatBox />
      <MessageInput />

      <Modal
        centered
        title="Create Channel"
        opened={isModalOn}
        onClose={() => setIsModalOn(false)}
        size='lg'
      >
        <TextInput sx={{ marginBottom: 20 }} label="Channel name" />
        <MultiSelect
          sx={{ marginBottom: 175 }}
          label="Add members"
          data={modalData}
          maxDropdownHeight={150}
          clearable
        />

        <Group position="right" grow>
          <Button>Create</Button>
        </Group>
      </Modal>
    </div>
  )
}

export default MainPage
