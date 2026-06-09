import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
        <Header />
        <h1>About Page</h1>
        <Link to="/about/about1" className='btn btn-info mx-2'>About 1</Link>
        <Link to="/about/about2" className='btn btn-success'>About 2</Link>

        <Outlet />
        <Footer />
    </div>
  )
}

export default About