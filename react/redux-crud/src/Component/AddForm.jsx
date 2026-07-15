import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { creatUser } from '../Slice/userSlice'
import { useNavigate } from 'react-router-dom'

function AddForm() {

    const redirect = useNavigate()

    const [from, setfrom] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setfrom({
            ...from,
            // id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(from)
    }

    const dispatch = useDispatch()

    const submitdata = (e) => {
        e.preventDefault();

        if (from.email == "" || from.name == "" || from.password == "") {
            alert("pls data first entery");
            return false;
        }

        dispatch(creatUser(from))
        setfrom({
            id: "",
            name: "",
            email: "",
            password: ""
        })
        redirect("/")

    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h1>User Data from add</h1>
                    <form onSubmit={submitdata}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">name</label>
                            <input type="text" value={from.name} onChange={getchange} name='name' className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={from.email} onChange={getchange} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={from.password} onChange={getchange} name='password' className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddForm