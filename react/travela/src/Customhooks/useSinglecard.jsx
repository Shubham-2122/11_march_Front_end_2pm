import axios from 'axios'
import React, { useState } from 'react'

function useSinglecard(api) {
  
    const [view,setview] = useState([])

    const singleView=async(id)=>{
        try {
            const res = await axios.get(`${api}/${id}`)
            setview(res.data)
        } catch (error) {
            console.log("Api data not Found",error)
        }
    }

    return {view,singleView}
}

export default useSinglecard
