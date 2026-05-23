// // State : it's varibale 
// State : we can change data 
// State : Same File use
// Function :  react 16.8 version 
// Hooks : useState()
// const [State,setState] = useState(value)
// hooks : Define before Return 

import React, { useState } from 'react'

function FunState() {

    //    define,change function = hookename(value)
    const [name,setname] = useState("abhinav")
    const [count,setcount] = useState(1)
    console.log(name)

  return (
    <div>
      <h1>Name : {name}</h1>
      <button onClick={()=>setname("sujal")}>Change Name</button>
      <button onClick={()=>setname("ketan")}>Change Name</button>

      <h2>Count : {count}</h2>
      <button onClick={()=>setcount(count + 1)}>Increment</button>
    </div>
  )
}

export default FunState
