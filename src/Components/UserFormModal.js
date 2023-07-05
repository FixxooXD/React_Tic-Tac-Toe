import React, { useState } from 'react'
export const UserForm = ({addUsers, closeUserForm}) => {
 
  const [user, setUser] = useState("")
  const [playerConut, setPlayerCount] = useState(0)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addUsers(user)
    setUser("")
    setPlayerCount(playerConut + 1)
  }
  const openingSumit = (e) => {
    e.preventDefault();
    setPlayerCount(playerConut + 1)
  }
  if(closeUserForm || playerConut === 3){
     return null
  }
  if (playerConut === 0 ) {
    return(
      <form onSubmit={openingSumit} className='absolute flex justify-center items-center top-0 w-screen h-screen bg-black-rgba'>
        <div className='px-4 flex flex-col justify-center items-center bg-white sm:h-[15rem] w-[20rem] h-[20rem]  sm:w-[15rem] h-[8rem] sm:w-[24rem] p-5'> 
        <p className='w-[15rem] text-2xl py-1 font-russo'>
          Hii Guyzzzzz
        </p>
        <button type='submit' className='border-2 border-black w-28 py-1 rounded-sm mt-6 font-russo'>Lets Playyy</button>
        </div>
    </form>
    )
  }
  


  if (playerConut === 1 ) {
    return(
      <form onSubmit={handleSubmit} className='absolute flex justify-center items-center top-0 w-screen h-screen bg-black-rgba'>
        <div className='px-4 flex flex-col justify-center items-center bg-white sm:h-[18rem] w-[20rem] h-[14rem] sm:w-[25rem]'> 
        <p className='w-[15rem] text-lg py-1 font-russo'>Add Player <span className='text-xl'>X</span></p>
         <input value={user} onChange={(e)=> setUser(e.target.value)} className='text-xl font-russo w-[15rem] h-[2rem] flex items-center p-2 border-2 border-black' placeholder='PlayerX' />
        <button type='submit' className='border-2 border-black w-28 py-1 rounded-sm mt-6'>Add Player</button>
        </div>
    </form>
    )
  }

  return (
    
    <form onSubmit={handleSubmit} className='absolute flex justify-center items-center top-0 w-screen h-screen bg-black-rgba'>
        <div className='px-4 flex flex-col justify-center items-center bg-white sm:h-[18rem] w-[20rem] h-[14rem] sm:w-[25rem]'> 
          <p className='w-[15rem] text-lg py-1 font-russo'>Add Player <span className='text-xl'>O</span></p>
         <input value={user} onChange={(e)=> setUser(e.target.value)} className='text-xl font-russo w-[15rem] h-[2rem] flex items-center p-2 border-2 border-black' placeholder='PlayerO' />
        <button type='submit' className='border-2 border-black w-28 py-1 rounded-sm mt-6'>Add Player</button>
        </div>
    </form>
  )
}
