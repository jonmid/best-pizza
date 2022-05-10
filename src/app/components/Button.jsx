import React from 'react'

import './../styles/button.css'

const Button = ({ children, type, style }) => {
  const onClickButton = () => {
    // eventOnClick()
  }

  return (
    <button type={type} className={style} onClick={() => onClickButton()}>
      {children}
    </button>
  )
}

export { Button }
