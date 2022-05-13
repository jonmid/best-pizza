import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import PanosPizza from './../../assets/images/products/panos_pizza.png'
import CamionPizza from './../../assets/images/products/pizzeria_camion_pizza.png'
import SbarroPizza from './../../assets/images/products/sbarro_pizza.png'
import StrollerPizza from './../../assets/images/products/stroller_pizza.png'
import TrulliPizza from './../../assets/images/products/trulli_pizza.png'
import VogliadiPizza from './../../assets/images/products/vogliadipizza_pizza.png'

import './../styles/detailStore.css'
import { changeOpenModal } from './../redux/store.slice'

const DetailStore = () => {
  const dispatch = useDispatch()
  const { selectStore } = useSelector(state => state.storeReducer)

  const images = {
    1: PanosPizza,
    2: CamionPizza,
    3: SbarroPizza,
    4: StrollerPizza,
    5: TrulliPizza,
    6: VogliadiPizza
  }

  const onClickButtonModal = () => {
    dispatch(changeOpenModal())
  }

  return (
    <div className='detail-store'>
      <div className='detail-store__info'>
        <h1 className='detail-store__title'>{selectStore.name}</h1>
        <p className='detail-store__description'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
            <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
          </svg>
          <span>{selectStore.address}</span>
        </p>
        <p className='detail-store__description mt-2'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
              clipRule='evenodd'
            />
          </svg>
          <span>{selectStore.description}</span>
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='app-swiper w-full mt-10 h-60 rounded-lg'
      >
        {selectStore.products.map(item => (
          <SwiperSlide key={item.id}>
            <div className='flex items-center h-full'>
              <img src={images[item.id]} alt={item.name} className='w-full bg-cover' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button type='button' className='detail-store__button-close' onClick={() => onClickButtonModal()}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  )
}

export { DetailStore }
