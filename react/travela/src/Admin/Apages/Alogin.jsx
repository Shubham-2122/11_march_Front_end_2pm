import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Alogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Aid")){
            redirect("/dash")
        }
    },[])

    const [form,setform] = useState({
        email:"",
        password:""
    })

    const getchage=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const getsubmit=async(e)=>{
        e.preventDefault();
        
        const {email,password} = form

        if(email == "" || password == ""){
            toast.error("pls Field data first");
            return false
        }

        try {

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            console.log(res.data)

            // email check
            if(res.data.length === 0){
                toast.error("Email does not Found..")
                return false;
            }

            const admin = res.data[0]
            console.log(admin)
        
            // password check 
            if(password != admin.password){
                toast.error("password does not match")
                return false;
            }

            localStorage.setItem("Aid",admin.id)
            localStorage.setItem("Aname",admin.name)
            toast.success("login successfully")
            redirect("/dash")
            
        } catch (error) {
            toast.error("api data not Found")
        }
    }

  return (
    <div>
      <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

        <form action="" onSubmit={getsubmit}>
               <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase text-light">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput value={form.email} onChange={getchage} name='email' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput value={form.password} onChange={getchage} name='password' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                Login
              </MDBBtn>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              {/* <div>
                <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

              </div> */}
            </MDBCardBody>
          </MDBCard>
        </form>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  )
}

export default Alogin
