// Props :  it's called propertry 
// props : One component to another compoenent data pass 
// Props : We can not Chanage 

import React from 'react'

function FuncProps({img,title,desc}) {
    return (
        <div className='col-md-4'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>

        </div>
    )
}

export default FuncProps