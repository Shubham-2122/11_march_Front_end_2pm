import axios from 'axios'
import React, { useState } from 'react'

function useApi(pathapi) {
    
    const [api,setapi] = useState([]) 

    const fetchdata =async()=>{
        try {
            const res =await axios.get(pathapi)
            setapi(res.data)
        } catch (error) {
            console.log("api not Found",error)
        }
    }    

    return {api,fetchdata}
}

export default useApi
