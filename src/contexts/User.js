import { useEffect, useState, createContext } from 'react'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
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
    const userData = JSON.parse(localStorage.getItem('user'))
    setUser(userData)
  }, [])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContextProvider, UserContext }
