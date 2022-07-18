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

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}
