import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readuser } from '../Slice/userSlice'
import { Link } from 'react-router-dom'

function UserData() {

    const { pending, users } = useSelector((state) => state.user)
    // console.log(pending)
    // console.log(users)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(readuser())
    }, [])

    return (
        <div>
            <h1 className='text-center'>hello this User Data</h1>
            <div className="container">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((data, index) => {
                                return (
                                    <tr className='text-center' key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <Link to={`/edit/${data.id}`} className='btn btn-success mx-2'>Edit</Link>
                                            <button className='btn btn-danger' onClick={()=>dispatch(deleteUser(data.id))}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default UserData