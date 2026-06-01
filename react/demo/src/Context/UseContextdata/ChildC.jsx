import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildC() {

    const context = useContext(data)
    // console.log(context)
    const { form, setform } = context

    return (
        <div>
            <h1>Hello C Compo</h1>
            <h1>C : count : {form.count}</h1>
            <button onClick={() => setform({ ...form, count: form.count + 1 })}>Increment</button>
        </div>
    )
}

export default ChildC
