import React from 'react'
import { Link } from 'react-router-dom'
import { Plus, Hash } from 'tabler-icons-react'
import { useGet } from '../../api/useGet'

const Channels = ({ setIsModalOn }) => {
  const { status, data } = useGet('http://206.189.91.54/api/v1/channels')

  const handleNewChannel = () => {
    setIsModalOn(true)
  }

  return (
    <div>
      <h2>Channels</h2>
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
        <div onClick={handleNewChannel}>
          <Plus /> Add channels
        </div>
      </ul>
    </div>
  )
}

export default Channels
