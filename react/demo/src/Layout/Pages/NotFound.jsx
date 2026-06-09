import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

    const redirect = useNavigate()

    const HomeBack=()=>{
        redirect("/")
        console.log("Hello Back to Home page")
    }

  return (
    <div>
      <h1 className='bg-danger text-light text-center p-5'>404 Not Found Page</h1>
      <Link to="/" className='btn btn-success'>Back to Home</Link>
      <button onClick={HomeBack} className='btn btn-info mx-2'>Back To home</button>
    </div>
  )
}

export default NotFound
