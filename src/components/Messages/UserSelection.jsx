import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/User'
import { MultiSelect } from '@mantine/core'
import { UserCircle, ChevronDown } from 'tabler-icons-react'

const UserSelection = ({ userList, status, setIsNewMessage }) => {
  const [userId, setUserId] = useState([])
  const { handleSettingReceivers } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = e => {
    setUserId(e)
    let receiver = userList.find(user => user.id === e[0])
    handleSettingReceivers(e[0], receiver.email)
    setIsNewMessage(false)
    // navigate(`/app/${userId}`)
  }

  return (
    <div>
      <MultiSelect
        icon={<UserCircle size={16} />}
        rightSection={<ChevronDown size={16} />}
        value={userId}
        variant="unstyled"
        placeholder="Enter user"
        onChange={e => handleSubmit(e)}
        className="user-select"
        limit={20}
        maxSelectedValues={1}
        data={userList.map(user => {
          const userObj = {
            value: user.id,
            label: user.email,
          }

          return userObj
        })}
        searchable
        maxDropdownHeight={150}
        nothingFound="Nothing found"
      />
    </div>
  )
}

export default UserSelection
