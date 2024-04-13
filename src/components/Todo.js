import React, { useState } from 'react'

export default function Todo({todo,deleteTodo,updateTodo}) {
 let [edit,setEdit]=useState(false);
 let [title,setTitle]=useState(todo.title);

 let handleUpdate=(e)=>{
  e.preventDefault();
  let updatedTodo={
    id:todo.id,
    title,
    completed:todo.competed
  }
  updateTodo(updatedTodo);
  setEdit(false);

 }

 let handleCheckbox=()=>{
  let updatedTodo={
    id:todo.id,
    title,
    completed:!todo.completed
  }
  updateTodo(updatedTodo);
 }
  return (
    <li className='flex justify-between items-center  dark:bg-gray-500 p-4 bg-white border border-b-gray-200'>
       <div className="todo-item flex">
           <input type="checkbox" checked={todo.completed} onChange={handleCheckbox} className='peer relative appearance-none w-5 h-5 rounded-full border mr-2 items-center border-green-400 cursor-pointer checked:bg-green-400'/>
          {!edit && <span onDoubleClick={()=>setEdit(true)} className={`dark:text-white ${todo.completed ? 'line-through': ''}`}>
              {todo.title}
           </span>}
           {edit && 
           <form onSubmit={handleUpdate}>
            <input type="text" className='inline border border-gra' value={title} onChange={(e)=>setTitle(e.target.value)}/>
           </form>
           }
       </div>
       <button className="x-button" onClick={()=> deleteTodo(todo.id)}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4ECB71" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
           </svg>
       </button>
     </li>
  )
}
