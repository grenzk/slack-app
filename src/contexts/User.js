import { useEffect, useState, createContext } from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
  })

  const handleLogin = (uid, accessToken, client, userEmail, expiry) => {
    setUser({
      uid,
      accessToken,
      client,
      currentUser: userEmail,
      expiry,
      isLoggedIn: true,
      receivers: [],
    })
  }

  const handleLogout = () => {
    setUser({
      uid: '',
      accessToken: '',
      client: '',
      currentUser: '',
      expiry: '',
      isLoggedIn: false,
      receivers: [],
    })
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'))
    setUser(userData)
  }, [])

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}
