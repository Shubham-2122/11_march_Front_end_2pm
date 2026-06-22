import React, { useEffect } from 'react'
import Header from '../Layout/Coman/Header'
import useCount from './useCount'
import useApi from './useApi'


function Datamanger() {

    const {count,increment} = useCount(1)
    // console.log(count)

    useEffect(()=>{
        fetchdata()
    },[])

    const {data,fetchdata} = useApi("https://fakestoreapi.com/products")
    console.log(data)

  return (
    <div>
        <Header />
        <h1>hello this counter data</h1>
        <h1>Count : {count}</h1>
        <button onClick={increment}>increment</button>

        <button onClick={increment}>increment</button>

        {
            data.map((pro)=>{
                console.log(pro)
            })
        }
    </div>
  )
}

export default Datamanger
