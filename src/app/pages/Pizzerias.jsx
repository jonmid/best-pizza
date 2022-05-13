import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import './../styles/pizzerias.css'
import { TitlePage } from '../components/TitlePage'
import { Search } from '../components/Search'
import { ListStores } from '../components/ListStores'
import { ItemStore } from '../components/ItemStore'
import { Empty } from '../components/Empty'

const Pizzerias = () => {
  const { stores } = useSelector(state => state.storeReducer)
  const [filter, setFilter] = useState('')
  let renderView

  if (filter.length > 0) {
    const filteredStores = stores.filter(item => item.name.toLowerCase().includes(filter))
    if (filteredStores.length > 0) {
      renderView = (
        <ListStores>
          {filteredStores.map(store => (
            <ItemStore key={store.id} store={store} type='add' />
          ))}
        </ListStores>
      )
    } else {
      renderView = <Empty title='No se encontró resultados' message='Verifique la información que ingresó en el campo de búsqueda.' />
    }
  }

  if (filter.length === 0) {
    renderView = (
      <ListStores>
        {stores.map(store => (
          <ItemStore key={store.id} store={store} type='add' />
        ))}
      </ListStores>
    )
  }

  return (
    <>
      <TitlePage title='Tiendas' subtitle='Escoge tu pizzería favorita' />

      <section className='mt-12'>
        <Search setFilter={setFilter} />
      </section>

      {renderView}
    </>
  )
}

export { Pizzerias }
