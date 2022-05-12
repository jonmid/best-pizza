import React from 'react'

import './../styles/pizzerias.css'
import { Search } from '../components/Search'
import { ListStores } from '../components/ListStores'
import { ItemStore } from '../components/ItemStore'

const Pizzerias = () => {
  return (
    <>
      <h1 className='pizzerias__title'>Tiendas</h1>
      <span className='pizzerias__subtitle'>Escoge tu pizzería favorita</span>

      <section className='mt-12'>
        <Search />
      </section>

      <ListStores>
        <ItemStore />
        <ItemStore />
        <ItemStore />
        <ItemStore />
        <ItemStore />
      </ListStores>
    </>
  )
}

export { Pizzerias }
