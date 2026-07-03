import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const redirect = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Uid")) {
      redirect("/");
    }
  }, []);

  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const getchage = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getsubmit = async (e) => {
    e.preventDefault();

    const { email, password } = form;

    if (email == "" || password == "") {
      toast.error("pls Field data first");
      return false;
    }

    try {
      const res = await axios.get(`http://localhost:3000/users?email=${email}`);
      console.log(res.data);

      // email check
      if (res.data.length === 0) {
        toast.error("Email does not Found..");
        return false;
      }

      const admin = res.data[0];
      console.log(admin);

      // password check
      if (password != admin.password) {
        toast.error("password does not match");
        return false;
      }

      // status

      if (admin.status == "block") {
        toast.error("Account hase been blocked..");
        return false;
      }

      localStorage.setItem("Uid", admin.id);
      localStorage.setItem("Uname", admin.name);
      toast.success("login successfully");
      redirect("/");
    } catch (error) {
      toast.error("api data not Found");
    }
  };

  return (
    <div>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <form action="" onSubmit={getsubmit}>
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                  <p className="text-white-50 mb-3">
                    Please enter your login and password!
                  </p>

                  <MDBInput
                    value={form.email}
                    name="email"
                    onChange={getchage}
                    wrapperClass="mb-4 w-100"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                  />
                  <MDBInput
                    value={form.password}
                    name="password"
                    onChange={getchage}
                    wrapperClass="mb-4 w-100"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                  />

                

                  <MDBBtn size="lg">Login</MDBBtn>

                  <hr className="my-4" />
                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/new" class="text-dark fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;
