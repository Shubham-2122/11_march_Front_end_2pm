import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const redirect = useNavigate();

  const [formdata, setformdata] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    status: "",
  });

  const getchange = (e) => {
    setformdata({
      ...formdata,
      id: new Date().getTime().toString(),
      status: "unblock",
      [e.target.name]: e.target.value,
    });
    console.log(formdata);
  };

  const getsubmit = async (e) => {
    e.preventDefault();

    if (
      formdata.email == "" ||
      formdata.name == "" ||
      formdata.password == ""
    ) {
      toast.error("pls field data first..");
      return false;
    }
    try {
      const res = await axios.post(`http://localhost:3000/users`, formdata);
      toast.success("Register Successfully");
      redirect("/login");
      setformdata({
        name: "",
        email: "",
        password: "",
        status: "",
      });
    } catch (error) {}
  };

  return (
    <div>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <form action="" onSubmit={getsubmit}>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      value={formdata.name}
                      onChange={getchange}
                      name="name"
                      label="Your Name"
                      id="form1"
                      type="text"
                      className="w-100"
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      value={formdata.email}
                      onChange={getchange}
                      name="email"
                      label="Your Email"
                      id="form2"
                      type="email"
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      value={formdata.password}
                      onChange={getchange}
                      name="password"
                      label="Password"
                      id="form3"
                      type="password"
                    />
                  </div>

                  <div className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>

                  <MDBBtn className="mb-4" size="lg">
                    Register
                  </MDBBtn>
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Register;
