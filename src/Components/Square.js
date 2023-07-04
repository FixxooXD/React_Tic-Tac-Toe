import React from 'react'

export const Square = (props) => {
  return (
    <div onClick={props.onClick} className='w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border-2 border-black flex items-center justify-center'>
    <h5 className='text-3xl font-Belanosima'>{props.value}</h5>
    </div>
  )
}
