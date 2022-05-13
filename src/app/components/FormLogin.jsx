import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import './../styles/formLogin.css'
import { fetchAsyncStores } from './../redux/store.slice'
import IconUser from './../../assets/icons/ic_user.png'
import IconPassword from './../../assets/icons/ic_password.png'
import { Button } from './../components/Button'
import { Error } from './Error'
import { Loader } from './Loader'

const FormLogin = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, isLoading, error } = useSelector(state => state.storeReducer)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const navigate = useNavigate()

  const onSubmit = data => {
    dispatch(fetchAsyncStores(data))
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/`)
    }
  }, [isAuthenticated])

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4'>
        <div className='form__input'>
          <input id='user' type='email' name='user' placeholder='Usuario' {...register('user', { required: true })} />
          {/* <input id='user' type='email' name='user' placeholder='Usuario' {...register('user', { required: true })} defaultValue='pperez@perez.com' /> */}
          <img src={IconUser} alt='icon-user' />
        </div>
        {errors.user && <span className='form__input--message'>Este campo es requerido</span>}
      </div>

      <div className='mb-4'>
        <div className='form__input'>
          <input id='pass' type='password' name='pass' placeholder='Contraseña' {...register('password', { required: true })} />
          {/* <input id='pass' type='password' name='pass' placeholder='Contraseña' {...register('password', { required: true })} defaultValue='pperezs123' /> */}
          <img src={IconPassword} alt='icon-pass' />
        </div>
        {errors.password && <span className='form__input--message'>Este campo es requerido</span>}
      </div>

      {error !== null && <Error message={error} />}

      <span className='form__span'>¿Olvidaste tu contraseña?</span>

      {isLoading ? (
        <Loader size={60} lineWeight={5} speed={2} color='#f9c444' />
      ) : (
        <Button type='submit' style='button-primary'>
          Iniciar sesión
        </Button>
      )}
    </form>
  )
}

export { FormLogin }
