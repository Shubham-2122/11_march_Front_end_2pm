import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../features/counter/counterSlice'

function Count() {

    const dispatch = useDispatch()
  return (
    <div>
        <h1>Count function decrement</h1>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Count