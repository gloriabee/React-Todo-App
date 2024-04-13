import React, { useState } from 'react'

export default function TodoForm({addTodo}) {
  let handleSubmit=(e)=>{
    e.preventDefault();
    let todo={
      id: Math.random(),
      title,
      completed:false
    }
    //add todo
    addTodo(todo);

    //clearing input
    setTitle('');
  }
  let [title,setTitle]=useState('');
  return (
   <form action="#" className='mb-4' onSubmit={handleSubmit}>
    <input type="text" className='py-4 px-8 dark:bg-gray-500 bg-white text-black  w-full dark:border-none focus:outline-none rounded-md '
     placeholder='What do you need to do?' 
     onChange={e=>setTitle(e.target.value)}
     value={title}
    />
   </form>
  )
}
