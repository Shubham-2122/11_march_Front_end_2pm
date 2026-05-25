// // State : it's varibale 
// State : we can change data 
// State : Same File use
// Function :  react 16.8 version 
// Hooks : useState()
// const [State,setState] = useState(value)
// hooks : Define before Return 

import React, { useState } from 'react'
import ImageData from './ImageData'

function FunState() {

    //    define,change function = hookename(value)
    const [name,setname] = useState("abhinav")
    const [count,setcount] = useState(1)
    const [Isimage,setisimage] = useState(true)
    console.log(name)

    const increment2=()=>{
      setcount(count + 2)
    }

  return (
    <div>
      <h1>Name : {name}</h1>
      <button onClick={()=>setname("sujal")}>Change Name</button>
      <button onClick={()=>setname("ketan")}>Change Name</button>

      <h2>Count : {count}</h2>
      <button onClick={()=>setcount(count + 1)}>Increment</button>
      <button onClick={()=>setcount(count - 1)}>Decrement</button>
      <button onClick={increment2}>Increment by 2</button>


      <button onClick={()=>setcount(0)}>Reset</button>
      <br /><br /> <br />
      <hr />
      <button onClick={()=>setisimage(false)}>Hide</button>
       <button onClick={()=>setisimage(true)}>Show</button>

        <button onClick={()=>setisimage(!Isimage)}>Toggle</button>

      {
        Isimage ? <ImageData /> : false
      }
    </div>
  )
}

export default FunState
