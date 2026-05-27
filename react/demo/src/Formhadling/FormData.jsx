import React, { useState } from 'react'

function FormData() {

    const [name,setname] = useState("")
    const [surname,setsurname] =useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] =useState("")

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                             <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" id="name" />
                            </div>
                             <div className="mb-3">
                                <label htmlFor="Surname" className="form-label">Surname</label>
                                <input type="text" value={surname} onChange={(e)=>setsurname(e.target.value)} className="form-control" id="Surname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                               
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormData