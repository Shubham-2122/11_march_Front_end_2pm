import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../features/counter/counterSlice'

function Counter() {

    const countr = useSelector((state)=> state.count.value)
    const {value} = useSelector((state)=>state.count)
    console.log("value => ",value)
    console.log(countr)

    const dispatch = useDispatch()

  return (
    <div>
        <h1>Hello counter : {countr}</h1>

        <button onClick={()=>dispatch(increment())}>Icrement</button>
    </div>
  )
}

export default Counter