import React from 'react'
import { NavLink } from 'react-router-dom'

import './../styles/navbar.css'

const Navbar = () => {
  const activeStyle = 'navbar__item--active'
  const noActiveStyle = 'navbar__item--noactive'

  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li>
          <NavLink className={({ isActive }) => (isActive ? activeStyle : noActiveStyle)} to='/'>
            Pizzerías
          </NavLink>
        </li>

        <li>
          <NavLink className={({ isActive }) => (isActive ? activeStyle : noActiveStyle)} to='location'>
            Ubicación
          </NavLink>
        </li>

        <li>
          <NavLink className={({ isActive }) => (isActive ? activeStyle : noActiveStyle)} to='bookmarks'>
            Favoritos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }
