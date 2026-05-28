/*
    useEffect : Function Side effect 
              : Api render show 
              : Effect compoent refresh 

    function,option

    useEffect(()=>{
        logic
    },[optinal])

*/

import React, { useEffect, useState } from 'react'

function Effect() {

    const [name,setname] = useState("shubham")

    // 1) useEffect no arrgument
    // useEffect(()=>{
    //     console.log("Hello without function")
    //     return(()=>{
    //         console.log("Hello Inside function")
    //     })   
    // })

     // 2) useEffect no arrgument ,blank array
    //  useEffect(()=>{
    //     console.log("Hello without function")
    //     return(()=>{
    //         console.log("Hello Inside function")
    //     })   
    // },[])


    // 3) state 
    useEffect(()=>{
        console.log("Hello without function")
        return(()=>{
            console.log("Hello Inside function")
        })   
    },[name])

  return (
    <div>
      <h1>hello this Effect data</h1>
      <h1>name : {name}</h1>

      <button onClick={()=>setname("sujal")}>change name</button>
    </div>
  )
}

export default Effect
