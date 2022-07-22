import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useStyles from '../../assets/js/mantineStyles'
import { UserMinus } from 'tabler-icons-react'

import { UserContext } from '../../contexts/User'

const DirectMessages = () => {
  const { classes } = useStyles()
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
      {receivers?.map(user => (
        <Link
          className={classes.link}
          to={`/MainPage/${user.id}`}
          key={user.id}
        >
          <UserMinus
            className={classes.linkIcon}
            onClick={e => handleClose(e, user.id)}
          />
          <span>{user.email}</span>
        </Link>
      ))}
    </div>
  )
}

export default DirectMessages
