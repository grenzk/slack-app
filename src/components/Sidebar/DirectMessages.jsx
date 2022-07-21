import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { X } from 'tabler-icons-react'

import { UserContext } from '../../contexts/User'

const DirectMessages = () => {
  const {
    user: { receivers },
    handleUpdateReceivers,
  } = useContext(UserContext)
  const navigate = useNavigate()

  const handleClose = (e, id) => {
    e.preventDefault()
    const removeReceiver = receivers.filter(receiver => receiver.id !== id)
    handleUpdateReceivers(removeReceiver)
    if (receivers.length === 1) {
      navigate('/MainPage')
    } else {
      navigate(`${removeReceiver[removeReceiver.length - 1].id}`)
    }
  }
  return (
    <div>
      <h3 className="dm">Direct Messages</h3>
      <ul>
        {receivers?.map(user => (
          <Link to={`/MainPage/${user.id}`} key={user.id}>
            {user.email}
            <X className="close" onClick={e => handleClose(e, user.id)} />
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default DirectMessages
