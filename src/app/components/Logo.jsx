import React from 'react'

import './../styles/logo.css'

const Logo = ({ style, image }) => {
  return <img className={style} src={image} alt={image} />
}

export { Logo }
