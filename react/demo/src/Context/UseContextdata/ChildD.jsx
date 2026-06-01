import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildD() {

    const {name,setname} = useContext(data)
    
  return (
    <div>
       <h1>Hello D Compo</h1>
       <h1>D : {name}</h1>
       
       <button onClick={()=>setname("jiger sir")}>Change name</button>
    </div>
  )
}

export default ChildD
