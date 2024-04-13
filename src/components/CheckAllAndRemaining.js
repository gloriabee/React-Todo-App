import React from 'react'

export default function CheckAllAndRemaining() {
  return (
    <div className='bg-white  p-4 mt-0 flex justify-between items-center dark:bg-gray-500'>
      <div>
        <button className="py-2 px-4 bg-green-600 text-white">Check All</button>
      </div>
      <span className='text-black dark:text-white'>5 items left</span>
    </div>
  )
}
