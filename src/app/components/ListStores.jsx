import React from 'react'
import { useSelector } from 'react-redux'

import './../styles/listStores.css'
import { Modal } from '../components/Modal'
import { DetailStore } from './DetailStore'

const ListStores = ({ children }) => {
  const { openModal } = useSelector(state => state.storeReducer)

  return (
    <section className='listStores'>
      <ul className='listStores__ul'>{children}</ul>

      {!!openModal && (
        <Modal>
          <DetailStore />
        </Modal>
      )}
    </section>
  )
}

export { ListStores }
