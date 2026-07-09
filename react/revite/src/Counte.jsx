import React from 'react'
import useCount from './Hooks/useCount'
import useApi from './Hooks/useApi'

function Counte() {
 
    const {cout,increment,decrement} = useCount(1)
    const {data} = useApi("https://fakestoreapi.com/products")
    console.log(data)

    return (
    <div>
        <h1>Hello count : {cout}</h1>
        <button className='mx-5' onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>

    </div>
  )
}

export default Counte