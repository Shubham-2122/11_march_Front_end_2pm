import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../features/Todo/todoSlice'

function Data() {

    const [name,setname] = useState("")

    const dispatch = useDispatch()

    const getsumbit=(e)=>{
        e.preventDefault()
        dispatch(AddTodo(name))
        setname("");
    }

  return (
    <div>
        <h1>Todo LisT add</h1>
        <form action="" onSubmit={getsumbit}>
            <input type="text"  value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter your Name' />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Data