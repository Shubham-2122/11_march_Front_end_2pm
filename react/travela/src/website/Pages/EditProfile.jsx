import React, { useEffect, useState } from "react";
import Header from "../Coman/Header";
import Ahero from "../../Admin/Acoman/Ahero";
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
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function EditProfile() {

    const redirect = useNavigate()
  const [edit, setedit] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    const res = await axios.get(
      `http://localhost:3000/users/${localStorage.getItem("Uid")}`,
    );
    console.log(res.data);
    setedit(res.data);
  };

  const getchage = (e) => {
    setedit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const getupdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:3000/users/${edit.id}`,
        edit,
      );
      setedit({
        id: "",
        name: "",
        email: "",
        password: "",
      });
      redirect("/")
      localStorage.setItem("Uname",edit.name)
      toast.success("profile update successfully")
    } catch (error) {
      toast.error("Api data not found");
    }
  };

  return (
    <div>
      <Header />
      <Ahero title="Porfile" name="Profile" />

      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <form action="" onSubmit={getupdate}>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Profile Update
                  </p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      value={edit.name}
                      onChange={getchage}
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
                      value={edit.email}
                      onChange={getchage}
                      name="email"
                      label="Your Email"
                      id="form2"
                      type="email"
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      value={edit.password}
                      onChange={getchage}
                      name="password"
                      label="Password"
                      id="form3"
                      type="password"
                    />
                  </div>

                  <MDBBtn className="mb-4" size="lg">
                    Update Profile
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default EditProfile;
