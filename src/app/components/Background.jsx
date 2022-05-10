import React from 'react'

import './../styles/background.css'
import ImageBackground from './../../assets/images/imagebkg.png'
import PizzaBackground from './../../assets/images/pizza.png'

const Background = () => {
  return (
    <section className='background' style={{ backgroundImage: `url(${ImageBackground})` }}>
      <img src={PizzaBackground} alt='background' className='background__image' />
    </section>
  )
}

export { Background }
