import React from 'react'

import './../styles/titlePage.css'

const TitlePage = ({ title, subtitle }) => {
  return (
    <>
      <h1 className='title-page__title'>{title}</h1>
      <span className='title-page__subtitle'>{subtitle}</span>
    </>
  )
}

export { TitlePage }
