import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../contexts/User'

export const useGet = url => {
  const [data, setData] = useState([])
  const [error, setError] = useState([])
  const [status, setStatus] = useState('idle')

  const {
    user: { expiry, uid, accessToken, client },
  } = useContext(UserContext)

  useEffect(() => {
    const header = {
      expiry: expiry,
      uid: uid,
      'access-token': accessToken,
      client: client,
    }

    if (!url) return

    const fetchData = async () => {
      setStatus('fetching')
      let {
        data: { data },
      } = await axios.get(url, { header }).catch(error => setError(error))
      setData(data)
      setStatus('fetched')
    }

    fetchData()
  }, [url, expiry, uid, accessToken, client])

  return { status, data, error }
}
