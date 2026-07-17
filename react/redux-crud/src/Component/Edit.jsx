import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { EditUser } from '../Slice/userSlice'

function Edit() {

    const redirect = useNavigate()
    const { id } = useParams()
    console.log(id)

    const [profile, setprofile] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const { users } = useSelector((state) => state.user)
    // console.log(users)

    useEffect(() => {
        const singleuser = users.filter((data) => data.id === id)
        console.log(singleuser[0])
        setprofile(singleuser[0])
    }, [])

    const getchage = (e) => {
        setprofile({
            ...profile,
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()

    const getupdate = (e) => {
        e.preventDefault();

        try {
            dispatch(EditUser(profile))
            setprofile({
                id: "",
                name: "",
                email: "",
                password: ""
            })
            redirect("/")
        } catch (error) {
            console.log(error)
        }
    }

    console.log(profile)


    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1>Edit User Form</h1>
                        <form onSubmit={getupdate} >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">name</label>
                                <input type="text" value={profile.name} onChange={getchage} name='name' className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={profile.email} onChange={getchage} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={profile.password} onChange={getchage} name='password' className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Edit