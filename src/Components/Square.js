import React from 'react'

export const Square = (props) => {
  return (
    <div onClick={props.onClick} className='w-[100px] h-[100px] border-2 border-black flex items-center justify-center'>
    <h5 className='text-xl'>{props.value}</h5>
    </div>
  )
}
