// Props :  it's called propertry 
// props : One component to another compoenent data pass 
// Props : We can not Chanage just read format
// Props : two Class and Function 
// Class : As parameter
// class : Constro ,super , this


import React, { Component } from 'react'

class ClassProps extends Component {
    constructor(props){
        super(props);
        this.data = props
    }
    render() {
        return (
            <div className='col-md-4'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.data.title}</h5>
                        <p className="card-text">{this.data.desc}</p>
                        <button  className="btn btn-primary">buy</button>
                        <button  className="btn btn-primary">detils</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassProps