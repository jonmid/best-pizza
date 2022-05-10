import React from 'react'

import './../styles/login.css'
import LogoYellowBlack from './../../assets/icons/logo/bestiizza-yellow-b.png'
import { Logo } from '../components/Logo'
import { FormLogin } from '../components/FormLogin'

const Login = () => {
  return (
    <section className='login'>
      <div className='login__section'>
        <Logo style='logo-yellow-black' image={LogoYellowBlack} />
        <h1 className='login__section--title'>Bienvenido</h1>
        <p className='login__section--subtitle'>A las mejores pizzas del país</p>
        <FormLogin />
      </div>
    </section>
  )
}

export { Login }
