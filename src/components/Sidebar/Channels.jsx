import React from 'react'
import { Link } from 'react-router-dom'
import { Plus, Hash } from 'tabler-icons-react'
import useStyles from '../../assets/js/mantineStyles'
import useGet from '../../api/useGet'

const Channels = ({ setIsModalOn, setIsChannelInfo }) => {
  const { status, data } = useGet('http://206.189.91.54/api/v1/channels')
  const { classes } = useStyles()

  const handleNewChannel = () => {
    setIsModalOn(true)
    setIsChannelInfo(false)
  }

  return (
    <div>
      <h3 className="dm">Channels</h3>
      <div onClick={handleNewChannel} className={classes.link}>
        <Plus className={classes.linkIcon} />
        <span>Create a channel</span>
      </div>

      {status === 'idle' || status === 'fetching' ? (
        <span className={classes.link}>Loading Channels</span>
      ) : (
        data?.map(channel => {
          return (
            <Link
              key={channel.id}
              to={`/MainPage/${channel.id}`}
              className={classes.link}
            >
              <Hash className={classes.linkIcon} />
              <span>{channel.name}</span>
            </Link>
          )
        })
      )}
    </div>
  )
}

export default Channels
