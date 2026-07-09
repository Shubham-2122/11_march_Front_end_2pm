import React, { createContext, useState } from 'react'
import C from './C';

export const theme = createContext()

function A() {

    const [count,setcout] = useState(0);

  return (
    <div>
        A
    <theme.Provider value={{count,setcout}}>
        <C />
    </theme.Provider>
    </div>
  )
}

export default A