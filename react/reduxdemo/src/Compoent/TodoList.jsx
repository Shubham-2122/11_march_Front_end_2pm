import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Data from './Data'
import { deleteTodo } from '../features/Todo/todoSlice'

function TodoList() {

    const {todo} = useSelector((state)=>state.todos)
    console.log(todo)

    const dispatch = useDispatch()

  return (
    <div>
        <Data />
        <h1>Todo Data List </h1>
        <ul>
            {
                todo.map((data,index)=>{
                    return(
                        <li key={index}>{data} <button onClick={()=>dispatch(deleteTodo(index))}>delete</button> <button>edit</button></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default TodoList