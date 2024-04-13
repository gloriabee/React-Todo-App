import './App.css';
import './css/main.css'
import Header from './components/Header.js'
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import CheckAllAndRemaining from './components/CheckAllAndRemaining.js';
import FilterClear from './components/FilterClear.js';
import { useCallback, useEffect, useState } from 'react';

function App() {
  let [todos,setTodos]=useState([]);
  let [filterTodos,setFilterTodos]=useState([todos]);

  useEffect(()=>{
    fetch('http://localhost:3001/todos')
    .then(res => res.json())
    .then((todos)=>{
      setTodos(todos);
      setFilterTodos(todos);
    })
  },[]);

  let addTodo=(todo)=>{
    //update data in server side
    fetch('http://localhost:3001/todos',{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo)
    })
    //update data in client side
    setTodos(prevState=>[...prevState,todo]);
  }

  let deleteTodo=(todoId)=>{
    //delete data in server side
    fetch(`http://localhost:3001/todos/${todoId}`,{
      method : "DELETE"
    })


    //delete data in client side
    setTodos(prevState=>{
      return prevState.filter(todo => {
        return todo.id !== todoId
      });
    })
  }

  let updateTodo=(todo)=>{
    //server
    fetch(`http://localhost:3001/todos/${todo.id}`,{
      method:"PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo)
    })

    //client
    setTodos(prevState=>{
      return prevState.map(t=>{
        if(t.id===todo.id){
          return todo;
        }
        return t;
      })
    })
  }

let checkAll=()=>{
  //server
  todos.forEach(t=>{
    t.completed=true;
    updateTodo(t);
  })


  //client
  setTodos(prevState=>{
    return prevState.map(t=>{
      return {...t,completed:true}
    }
  )
  })
}

let clearCompleted=()=>{
  //server
  todos.forEach(t=>{
    if(t.completed){
      deleteTodo(t.id);
    }
  })

  //client
  setTodos(prevState=>{
     return prevState.filter(t => !t.completed)
  })
}

let filterBy=useCallback(
  (filter)=>{
    if(filter==="All")
    {
      setFilterTodos(todos);
    }
    if(filter==="Active"){
      setFilterTodos(todos.filter(t=>!t.completed))
    }
    if(filter==="Completed"){
      setFilterTodos(todos.filter(t=>t.completed))
    }
  },[todos]
)


let remainingCount=todos.filter(t=>!t.completed).length;

  return (
    <div className="todo-app-container dark:bg-black bg-green-200 w-screen h-screen">
     <div className="todo-app">
        {/* Header */}
        <Header/>

        {/* Todo Form */}
        <TodoForm addTodo={addTodo}/>

        {/* Todo List */}
        <TodoList todos={filterTodos} deleteTodo={deleteTodo}  updateTodo={updateTodo}/>

          {/* Check all and remaining */}
          <CheckAllAndRemaining remainingCount={remainingCount} checkAll={checkAll}/>

          {/* Filter and clear */}
          <FilterClear  clearCompleted={clearCompleted} filterBy={filterBy}/>
         
         
     </div>
    </div>
  );
}

export default App;
