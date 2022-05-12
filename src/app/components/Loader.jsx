import React from 'react'
import { Ring } from '@uiball/loaders'

const Loader = ({ size, lineWeight, speed, color }) => {
  return (
    <div className='flex items-center justify-center'>
      <Ring size={size} lineWeight={lineWeight} speed={speed} color={color} />
    </div>
  )
}

export { Loader }
