import React from 'react'
import { useSelector } from 'react-redux'

import './../styles/pizzerias.css'
import { TitlePage } from '../components/TitlePage'
import { Search } from '../components/Search'
import { ListStores } from '../components/ListStores'
import { ItemStore } from '../components/ItemStore'

const Pizzerias = () => {
  const { stores } = useSelector(state => state.storeReducer)

  return (
    <>
      <TitlePage title='Tiendas' subtitle='Escoge tu pizzería favorita' />

      <section className='mt-12'>
        <Search />
      </section>

      <ListStores>
        {stores.map(item => (
          <ItemStore key={item.id} store={item} />
        ))}
      </ListStores>
    </>
  )
}

export { Pizzerias }
