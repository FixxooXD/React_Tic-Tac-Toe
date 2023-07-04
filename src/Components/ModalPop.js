import React from 'react'

export const ModalPop = ({open, onClick, currentState }) => {
  if (!open) return null
  console.log(currentState)
  if (currentState === "Its A Tieeee") {
    return (
      <div className='absolute flex justify-center items-center top-0 w-screen h-screen bg-black-rgba'>
        <div className='px-4 flex flex-col justify-center items-center bg-white sm:h-[18rem] w-[15rem] h-[10rem] sm:w-[25rem]'>
         <p className='text-4xl font-russo'>{currentState} </p>
        <button onClick={ ()=> onClick() } className='border-2 border-black w-36 mt-6'>Wanna Play More...?</button>
        </div>
    </div>
    )
  }
  return (
    <div className='absolute flex justify-center items-center top-0 w-screen h-screen bg-black-rgba'>
        <div className='px-4 flex flex-col justify-center items-center bg-white sm:h-[18rem] w-[15rem] h-[10rem] sm:w-[25rem]'>
         <p className='text-4xl font-russo'>{currentState} Wins</p>
        <button onClick={ ()=> onClick() } className='border-2 border-black w-36 mt-6'>Wanna Play More...?</button>
        </div>
    </div>
  )
}
