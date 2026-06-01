import React, { createContext, useState } from 'react'
import ChildD from './ChildD'
import ChildC from './ChildC'
import ChildB from './ChildB'

export const data = createContext()

function ChildA() {

    const [name,setname] = useState("ketan")
    const [form,setform] = useState({
        name:"hello",
        count:0
    })

  return (
    <div>
      <h1>Hello A Compo</h1>
      <h1>A  : {name}</h1>

      {/* use context

        1) create context : inbuilt 

        2) Provider context : data pass

        3) usecontext : directly access
      
      */}

        <data.Provider value={{name,setname,form,setform}}>
            <ChildB />
            <ChildC />
            <ChildD />
        </data.Provider>

    </div>
  )
}

export default ChildA
