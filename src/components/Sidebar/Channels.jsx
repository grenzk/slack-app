import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Hash } from 'tabler-icons-react'
import useStyles from '../../assets/js/mantineStyles'
import useGet from '../../api/useGet'

const Channels = ({ setIsModalOn }) => {
  const { status, data } = useGet('http://206.189.91.54/api/v1/channels')
  const { classes, cx } = useStyles()
  const [active, setActive] = useState('Billing')

  const handleNewChannel = () => {
    setIsModalOn(true)
  }

  return (
    <div>
      <h3 className='dm'>Channels</h3>
      <div
        onClick={handleNewChannel}
        className={cx(classes.link, {
          [classes.linkActive]: 'Create a channel' === active,
        })}
      >
        <Plus className={classes.linkIcon} />
        <span>Create a channel</span>
      </div>

      <ul>
        {status === 'idle' || status === 'fetching' ? (
          <li>Loading Channels</li>
        ) : (
          data?.map(channel => {
            return (
              <Link key={channel.id} to={`/MainPage/${channel.id}`}>
                <li>
                  <Hash /> {channel.name}
                </li>
              </Link>
            )
          })
        )}
      </ul>
    </div>
  )
}

export default Channels
