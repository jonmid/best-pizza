import React from 'react'
import { useDispatch } from 'react-redux'

import './../styles/itemStore.css'
import { addBookmark, removeBookmark } from './../redux/store.slice'
import PanosPizza from './../../assets/images/stores/panos_pizza.png'
import SbarroPizza from './../../assets/images/stores/sbarro_pizza.png'
import CamionPizza from './../../assets/images/stores/camion_pizza.png'
import VogliaPizza from './../../assets/images/stores/voglia_pizza.png'
import StrollerPizza from './../../assets/images/stores/stroller_pizza.png'
import TrulliPizza from './../../assets/images/stores/trulli_pizza.png'
import { ButtonFavorite } from './ButtonFavorite'

const ItemStore = ({ store, type }) => {
  const dispatch = useDispatch()
  const images = {
    'Pizzeria Capitan America': PanosPizza,
    'Pizzeria Iron Man': SbarroPizza,
    'Pizzeria Thor': CamionPizza,
    'Pizzeria Black Widow': VogliaPizza,
    'Pizzeria Spider Man': StrollerPizza
  }

  const onClickButtonAdd = () => {
    dispatch(addBookmark(store))
  }

  const onClickButtonDelete = () => {
    dispatch(removeBookmark(store))
  }

  return (
    <li className='item-store'>
      <div className='item-store--shadow'>
        <img className='item-store__img' src={images[store.name]} alt={store.name} />
        <ButtonFavorite type={type} eventClick={type === 'add' ? onClickButtonAdd : onClickButtonDelete} />
      </div>
      <h2 className='item-store__name'>{store.name}</h2>
      <span className='item-store__address'>{store.address}</span>
    </li>
  )
}

export { ItemStore }
