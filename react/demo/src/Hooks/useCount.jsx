import React, { useState } from 'react'

function useCount(num) {
    
    const [count,setcount]= useState(num)

    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    
    return {count,increment,decrement}
}

export default useCount
