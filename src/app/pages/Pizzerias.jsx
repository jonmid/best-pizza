import React from 'react'

import './../styles/pizzerias.css'
import { TitlePage } from '../components/TitlePage'
import { Search } from '../components/Search'
import { ListStores } from '../components/ListStores'
import { ItemStore } from '../components/ItemStore'

const Pizzerias = () => {
  return (
    <>
      <TitlePage title='Tiendas' subtitle='Escoge tu pizzería favorita' />

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
