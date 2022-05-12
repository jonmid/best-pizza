import React from 'react'

import './../styles/listStores.css'

const ListStores = ({ children }) => {
  return (
    <section className='listStores'>
      <ul className='listStores__ul'>{children}</ul>
    </section>
  )
}

export { ListStores }
