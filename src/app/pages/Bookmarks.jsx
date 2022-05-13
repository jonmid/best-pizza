import React from 'react'
import { useSelector } from 'react-redux'

import { TitlePage } from '../components/TitlePage'
import { ListStores } from '../components/ListStores'
import { ItemStore } from '../components/ItemStore'
import { Empty } from '../components/Empty'

const Bookmarks = () => {
  const { bookmarks } = useSelector(state => state.storeReducer)

  return (
    <>
      <TitlePage title='Mis Favoritos' subtitle='Todas tus tiendas preferidas en un solo lugar' />

      {bookmarks.length > 0 ? (
        <ListStores>
          {bookmarks.map(store => (
            <ItemStore key={store.id} store={store} type='delete' />
          ))}
        </ListStores>
      ) : (
        <Empty title='No se encontró favoritos' message='Para guardar favoritos diríjase a la sección de Pizzerías, ahí encontrará todas las tiendas.' />
      )}
    </>
  )
}

export { Bookmarks }
