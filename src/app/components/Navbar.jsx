import React from 'react'

import './../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__list--item'>Pizzerías</li>
        <li className='navbar__list--item'>Ubicación</li>
        <li className='navbar__list--item'>Favoritos</li>
      </ul>
    </nav>
  )
}

export { Navbar }
