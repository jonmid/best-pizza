import React, { useEffect, useState } from 'react'

import './../styles/error.css'

const Error = ({ message }) => {
  const [show, setShow] = useState(true)
  let timeClear

  useEffect(() => {
    clearTimeout(timeClear)
    timeClear = setTimeout(() => setShow(!show), 4000)
  }, [message])

  if (show) {
    return (
      <div className='error'>
        <p>{message}</p>
      </div>
    )
  } else {
    return null
  }
}

export { Error }
