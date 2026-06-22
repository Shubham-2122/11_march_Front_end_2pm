import axios from 'axios'
import React, { useState } from 'react'

function useApi(apicall) {
    
    const [data,setdata] = useState([])

    const fetchdata = async()=>{
        try {
            const res = await axios.get(apicall)
            setdata(res.data)
        } catch (error) {
            console.log("error",error)
        }
    }

    return {data,fetchdata}
}

export default useApi
