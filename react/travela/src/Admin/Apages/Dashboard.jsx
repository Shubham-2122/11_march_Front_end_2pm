import React from 'react'
import Aheader from '../Acoman/Aheader'
import Ahero from '../Acoman/Ahero'

function Dashboard() {
  return (
    <div>
        <Aheader />
        <Ahero title="Admin Dashboard" name="dashboard" />
      <h1 className='text-center'>hello this Dashboard page</h1>
    </div>
  )
}

export default Dashboard
