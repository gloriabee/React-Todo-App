import React from 'react'

export default function FilterClear() {
  return (
    <div className='mt-5 p-4 flex justify-between text-black dark:text-white bg-white dark:bg-gray-500'>
      <div className='flex'>
        <button className='text-green-600 mr-2'>All</button>
        <button className='mr-2'>Active</button>
        <button className='mr-2'>Completed</button>
      </div>

        <span className="">clear completed</span>

    </div>
  )
}
