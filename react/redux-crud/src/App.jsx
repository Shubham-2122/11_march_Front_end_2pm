import React from 'react'
import UserData from './Component/UserData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddForm from './Component/AddForm'
import Navbar from './Component/Navbar'
import Edit from './Component/Edit'
import Admindata from './Component/Admindata'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<UserData />} />
         <Route path='/admin' element={<Admindata />} />
        <Route path='/add' element={<AddForm />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App