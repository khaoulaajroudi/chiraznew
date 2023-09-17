import React from 'react'
import './Home.css'
import  Navbar from "../Navbar/Navbar"
import Card from '../Cards/Card'
import List from '../Cards/List'
import Navbaradmin from '../Dashboard-admin/Navbar-admin/Navbaradmin'

const Home = () => {
  return (
    <div className='form'>
      <Navbar />
      <h1>Welcome to the home </h1>
      
<Navbaradmin />
      
      
    
    </div>
  )
}

export default Home
                                