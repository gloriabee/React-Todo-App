import React from 'react'

export default function CheckAllAndRemaining({remainingCount,checkAll}) {
  return (
    <div className='bg-white  p-4 mt-0 flex justify-between items-center dark:bg-gray-500'>
      <div>
        <button className="py-2 px-4 bg-green-600 text-white" onClick={checkAll}>Check All</button>
      </div>
      <span className='text-black dark:text-white'>{remainingCount} item{`${remainingCount>1?'s':''}`} left</span>
    </div>
  )
}
