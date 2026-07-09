import React, { useContext } from 'react'
import { theme } from './A'

function C() {

    const {count,setcout} = useContext(theme)

    return (
        <div>C
            <h1>Hello counter : {count}</h1>
            <button onClick={()=>setcout(count+2)}>incmrnet</button>
        </div>
    )
}

export default C