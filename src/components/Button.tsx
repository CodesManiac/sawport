import React from 'react'
import { ButtonType } from '../types'

export const Button = ({buttonData}:{buttonData:ButtonType}) => {
  return (
    <button onClick={buttonData.onReshedule} disabled className='email-button'>
        {buttonData.text}
    </button>
  )
}
