import React from 'react'

import { TitlePage } from '../components/TitlePage'
import { MyMapComponent } from '../components/MyMapComponent'

const LocationStore = () => {
  return (
    <>
      <TitlePage title='Ubicación' subtitle='Mira donde se encuentran nuestras tiendas' />

      <div className='mt-10 h-full'>
        <MyMapComponent />
      </div>
    </>
  )
}

export { LocationStore }
