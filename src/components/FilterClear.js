import React, { useEffect, useState } from 'react'

export default function FilterClear({clearCompleted,filterBy}) {
  let [filter,setFilter]=useState('All');

  useEffect(()=>{
    filterBy(filter)
  },[filter,filterBy])
  return (
    <div className='mt-5 p-4 flex justify-between text-black dark:text-white bg-white dark:bg-gray-500'>
      <div className='flex'>
        <button className={`mr-5 ${filter==='All' ? 'text-green-600' : ''}`} onClick={()=>setFilter('All')}>All</button>
        <button className={`mr-5 ${filter==='Active' ? 'text-green-600' : ''}`} onClick={()=>setFilter('Active')}>Active</button>
        <button className={`mr-5 ${filter==='Completed' ? 'text-green-600' : ''}`} onClick={()=>setFilter('Completed')}>Completed</button>
      </div>

        <span className="" onClick={clearCompleted}>clear completed</span>

    </div>
  )
}
