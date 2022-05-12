import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './../styles/header.css'
import { logout } from './../redux/store.slice'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClickLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header className='header'>
      <button type='button' className='header__button' onClick={() => onClickLogout()}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
        </svg>
        <span>Salir</span>
      </button>
    </header>
  )
}

export { Header }
