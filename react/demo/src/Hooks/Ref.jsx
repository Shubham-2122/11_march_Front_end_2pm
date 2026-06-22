// refresnce : pass
// data pass re-reder stop 
// real dom effect : inpput 

import React, { useRef } from 'react'
import Header from '../Layout/Coman/Header'

function Ref() {

    const refelement = useRef()

    const data =()=>{
        refelement.current.focus();
    } 

    const addcss= ()=>{
        refelement.current.style.background = "blue"
        refelement.current.style.color = "white"
    }

    return (
        <div>
            <Header />
            <input type="text" ref={refelement} placeholder='Enter your Name' />
            <button onClick={data}>add data</button>
            <button onClick={addcss}>Add css</button>
        </div>
    )
}

export default Ref
