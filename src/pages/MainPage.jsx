import React, { useContext } from 'react'
import { UserContext } from '../contexts/User'
import { Navigate } from 'react-router-dom'
import Sidebar from '../components/MainPage/Sidebar'
import ChatBox from '../components/MainPage/ChatBox'
import TopHeader from '../components/MainPage/TopHeader'
import MessageInput from '../components/MainPage/MessageInput'

const MainPage = () => {
  return (
    <div>
      <TopHeader />
      <Sidebar />
      <ChatBox />
      <MessageInput />
    </div>
  )
}

export default MainPage
