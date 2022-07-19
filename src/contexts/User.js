import { useEffect, useState, createContext } from 'react'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'))

    if (userData === null) {
      handleLogout()
    }

    setUser(userData)
  }, [])

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

    localStorage.setItem('user', JSON.stringify(user))
  }

  const handleLogout = () => {
    const loggedOut = {
      uid: '',
      accessToken: '',
      client: '',
      currentUser: '',
      expiry: '',
      isLoggedIn: false,
      receivers: [],
    }

    localStorage.setItem('user', JSON.stringify(loggedOut))
  }

  const handleSettingReceivers = (id, email) => {
    const updatedReceivers = user.receivers
    if (!updatedReceivers.includes(id)) {
      updatedReceivers.push({
        id,
        email,
      })
    }
    setUser({
      ...user,
      receivers: updatedReceivers,
    })
  }

  const handleUpdateReceivers = newReceivers => {
    setUser({
      ...user,
      receivers: newReceivers,
    })
  }

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogin,
        handleLogout,
        handleSettingReceivers,
        handleUpdateReceivers,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContextProvider, UserContext }
