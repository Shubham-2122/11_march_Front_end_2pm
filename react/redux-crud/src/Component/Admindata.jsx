import React from 'react'
import { useGetAdminQuery } from '../Slice/adminApi'

function Admindata() {

    const {data:admin = [] ,isLoading} = useGetAdminQuery();
    
    console.log(admin)
  return (
    <div>
        
        <h1>admin data</h1>
    </div>
  )
}

export default Admindata