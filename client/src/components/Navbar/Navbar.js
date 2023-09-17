import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='navbars'>
      <Link to="/"> <img  src='./images/logo.png' /></Link> 
        <ul className= "nav-menu">  
      <li className="nav-item">
         <Link to="/profil"><i class="fa-solid fa-user">
        </i>  </Link>
         </li>
      <li className="nav-item"> 
      <Link to="/list"> <i class="fa-solid fa-cart-shopping">
        </i></Link>
        </li> 
    </ul>
    </div>
  )
}

export default Navbar
 