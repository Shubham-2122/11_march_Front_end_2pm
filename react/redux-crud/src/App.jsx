import React from 'react'
import UserData from './Component/UserData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddForm from './Component/AddForm'
import Navbar from './Component/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<UserData />} />
        <Route path='/add' element={<AddForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App