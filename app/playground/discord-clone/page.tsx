'use client'

import React from 'react'
import './page.scss'
import Sidebar from './components/sidebar/Sidebar'
import Chat from './components/chat/Chat'


const DiscordClone = () => {

  // const user = useAppSelector((state) => state.user);
  // console.log(user)

  return (
    <div className="App">

      <Sidebar />
      <Chat />

    </div>
  )
}

export default DiscordClone