import React from 'react'

import './../styles/itemStore.css'

const ItemStore = () => {
  return (
    <li className='item-store'>
      <img className='item-store__img' src='https://via.placeholder.com/150' alt='tienda' />
      <h2 className='item-store__name'>Pizzeria Camion</h2>
      <span className='item-store__address'>Calle 94 # 9 - 76</span>
    </li>
  )
}

export { ItemStore }
