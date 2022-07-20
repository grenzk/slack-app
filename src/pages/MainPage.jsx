import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/User'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Modal } from '@mantine/core'
import Sidebar from '../components/MainPage/Sidebar'
import ChatBox from '../components/MainPage/ChatBox'
import TopHeader from '../components/MainPage/TopHeader'
import MessageInput from '../components/MainPage/MessageInput'
import CreateChannelForm from '../components/Modal/CreateChannelForm'
import { Title } from '../components/Messages/Title'

const MainPage = () => {
  const [selectedChannel, setSelectedChannel] = useState({})
  const [isModalOn, setIsModalOn] = useState(false)
  const [isNewMessage, setIsNewMessage] = useState(false)
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
      <Routes>
        <Route path="/:id" />
        <Route
          path="/"
          element={
            <div className='title-container'>
              <Title />
            </div>
          }
        />
      </Routes>
      <ChatBox />
      <MessageInput />

      <Modal
        centered
        title="Create Channel"
        opened={isModalOn}
        onClose={() => setIsModalOn(false)}
        size="sm"
      >
        <CreateChannelForm opened={isModalOn} />
      </Modal>
    </div>
  )
}

export default MainPage
