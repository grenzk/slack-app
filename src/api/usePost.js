import { useState } from 'react'
import axios from 'axios'

export const usePost = (url, info, headers = '') => {
  const [successResponse, setSuccessResponse] = useState({})
  const [errorResponse, setErrorResponse] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post(url, info, { headers })
      .then(response => setSuccessResponse(response))
      .catch(error => {
        const {
          data: { errorResponse },
        } = error.response
        setErrorResponse(errorResponse)
      })
  }

  return { successResponse, errorResponse, handleSubmit }
}
