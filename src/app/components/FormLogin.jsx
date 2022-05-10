import React from 'react'

import './../styles/formLogin.css'
import IconUser from './../../assets/icons/ic_user.png'
import IconPassword from './../../assets/icons/ic_password.png'
import { Button } from './../components/Button'

const FormLogin = () => {
  return (
    <form className='form'>
      <div className='form__input'>
        <input id='user' type='email' name='user' placeholder='Usuario' required />
        <img src={IconUser} alt='icon-user' />
      </div>

      <div className='form__input'>
        <input id='pass' type='password' name='pass' placeholder='Contraseña' required />
        <img src={IconPassword} alt='icon-pass' />
      </div>

      <span className='form__span'>¿Olvidaste tu contraseña?</span>

      <Button type='button' style='button-primary'>
        Iniciar sesión
      </Button>
    </form>
  )
}

export { FormLogin }
