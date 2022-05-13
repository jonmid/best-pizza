import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './../styles/background.css'
import ImageBackground from './../../assets/images/imagebkg.png'
import PizzaBackground from './../../assets/images/pizza.png'
import BestPizzaYellowWhite from './../../assets/icons/logo/bestiizza-yellow-w.png'
import { Logo } from './Logo'

const Background = () => {
  const { isAuthenticated } = useSelector(state => state.storeReducer)

  return (
    <section className='background' style={{ backgroundImage: `url(${ImageBackground})` }}>
      {isAuthenticated && (
        <Link to='/' className='absolute top-20 left-28 transition ease-in-out duration-1000 hover:-translate-y-1 hover:scale-110'>
          <Logo style='logo-yellow-white' image={BestPizzaYellowWhite} />
        </Link>
      )}

      <img src={PizzaBackground} alt='background' className='background__image' />
    </section>
  )
}

export { Background }
