import React from 'react'
import { useForm } from 'react-hook-form'

import './../styles/search.css'
import { Button } from './Button'

const Search = ({ setFilter }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    setFilter(data.search.toLowerCase())
  }

  return (
    <form className='search' onSubmit={handleSubmit(onSubmit)}>
      <input type='text' name='search' placeholder='Buscar tienda ...' className='search__input' {...register('search')} />

      <Button type='submit' style='button-secondary'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 duration-300 sm:mr-2' viewBox='0 0 20 20' fill='currentColor'>
          <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
        </svg>
        <span className='hidden duration-300 sm:block'>Buscar</span>
      </Button>
    </form>
  )
}

export { Search }
