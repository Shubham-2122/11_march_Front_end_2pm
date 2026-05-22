import React from 'react'
import "./style.css"

function Css() {

    let internal = {
        background : "blue",
        color : "white"
    }

  return (
    <div>
        How to Apply css 
        1) inline 
        2) internal : not work in js
        3) External : 

        {/* inline as key and value ad object pair */}
        <h1 style={{background:"red",color:"white"}}>Hello this Css inline use</h1>

        <h1 style={internal}>internal csss</h1>

        <div className="main">
            hello this main class data
        </div>

    </div>
  )
}

export default Css