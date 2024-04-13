import React from 'react'
import Todo from '../components/Todo.js'


export default function TodoList({todos,deleteTodo, updateTodo}) {
  return (
   <div>
    <ul className=''>
       {todos.map(todo => (
        <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo}  updateTodo={updateTodo}/>
       ))}
    </ul>
   </div> 
  )
}
