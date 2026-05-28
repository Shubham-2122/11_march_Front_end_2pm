import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseAxios() {

    const [user,setuser] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            // console.log(res.data)
            setuser(res.data)
        } catch (error) {
            console.log("Api not Found ",error)
        }
    }

  return (
    <div>
         <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">city</th>
                            <th scope="col">company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user && user.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.address.city}</td>
                                        <td>{data.company.name}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
    </div>
  )
}

export default UseAxios
