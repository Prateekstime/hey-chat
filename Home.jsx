import React from 'react'
import Chatbox from './Chatbox'
import Sidebar from './Sidebar'


const Home = () => {
  return (
    <div className="home">
    <div className="container">
      <Sidebar/>
      <Chatbox />
      
    </div>

  </div>
  )
}

export default Home
