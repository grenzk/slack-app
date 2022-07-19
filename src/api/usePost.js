import { useState } from 'react'
import axios from 'axios'

const usePost = (url, info, headers = '') => {
  const [res, setRes] = useState({})
  const [errors, setErrors] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post(url, info, { headers })
      .then(response => setRes(response))
      .catch(err => {
        const {
          data: { errors },
        } = err.response
        setErrors(errors)
      })
  }

  return { res, errors, handleSubmit }
}

export default usePost
