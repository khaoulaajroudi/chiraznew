import React from 'react'
import './Navbar-admin.css'
import { Link } from 'react-router-dom'
import List from '../../Cards/List'


const Navbaradmin = () => {
  return (
    <div className='box-menu'>
    <div className='navbarr'>
  <div className='nav-logo'>
        <img src='./images/logo.png' alt='logo'></img>
  </div>
    <div className='nav-icon'>
    <i class="fa-solid fa-building-shield"></i>
    <button className="mode-switch" title="Switch Theme">
        <svg className="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
      </div>
</div>
<div className='box-content'>
<div className='menu'>
    <ul className='link'>
     <li><i class="fa-solid fa-address-card"></i><Link to="/dashbord"> Profil</Link></li>
        <li><i class="fa-solid fa-users"></i><Link to="/produits"> Gestion Produits</Link></li>
        <li><i class="fa-solid fa-paste"></i><Link to='/users'> Gestion users</Link></li>
        <li><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</li>
    </ul>

</div>

<div className='content'>
 
</div>
</div>
</div>
  )
}

export default Navbaradmin
