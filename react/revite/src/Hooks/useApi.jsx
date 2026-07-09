import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useApi(api) {
  
    const [data,setdata] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get(api)
        setdata(res.data)
    }

  
    return {data,fetchdata}
}

export default useApi