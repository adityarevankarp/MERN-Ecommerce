import React from 'react'
import './Navbar.css'

import navprofileIcon from '../../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>Admin Panel</div>
      <img src={""} className='nav-logo' alt="" />
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
