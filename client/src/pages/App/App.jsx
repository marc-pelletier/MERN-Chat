import { useState } from 'react'
import './App.css'
import { getUser } from '../../utilities/users-service'

import NavBar from '../../components/NavBar/NavBar'

import AuthPage from '../AuthPage/AuthPage'
import ChatPage from '../ChatPage/ChatPage'

export default function App() {
  const [user, setUser] = useState(getUser())



  return (
      <div className='App'>
        {
          user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <ChatPage />
          </>
          :
          <AuthPage setUser={setUser} />
        }
      </div>
  )
}
