import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Aheader() {

  useEffect(()=>{
    if(!localStorage.getItem("Aid")){
      redirect("/alogin")
    }
  })

  const redirect = useNavigate()

  const logout=()=>{
    localStorage.removeItem("Aid")
    localStorage.removeItem("Aname")
    redirect("/alogin")
    toast.success("Alogout Successfully")
  }

  return (
    <div>
      <div>
        {/* Topbar Start */}
        <div className="container-fluid bg-primary px-5 d-none d-lg-block">
          <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
              <div
                className="d-inline-flex align-items-center"
                style={{ height: 45 }}
              >
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href
                >
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href
                >
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href
                >
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href
                >
                  <i className="fab fa-instagram fw-normal" />
                </a>
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                  href
                >
                  <i className="fab fa-youtube fw-normal" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div
                className="d-inline-flex align-items-center"
                style={{ height: 45 }}
              >
                {(() => {
                  if (localStorage.getItem("Aid")) {
                    return (
                      // <a href="#">
                        <small className="me-3 text-light">hello {localStorage.getItem("Aname")}</small>
                      // </a>
                    );
                  }
                })()}

                {
                  (()=>{
                    if(localStorage.getItem("Aid")){
                      return(
                        <Link >
                        <small className="me-3 text-light" onClick={logout}>Logout</small>
                       </Link>
                      )
                    }
                    else{
                       <Link to="/alogin" >
                        <small  className="me-3 text-light">Login</small>
                       </Link>
                    }
                  })()
                }

              
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar & Hero Start */}
        <div className="container-fluid position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href className="navbar-brand p-0">
              <h1 className="m-0">
                <i className="fa fa-map-marker-alt me-3" />
                Dashboard
              </h1>
              {/* <img src="img/logo.png" alt="Logo"> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                {/* <NavLink to="/" className="nav-item nav-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link ">
                  About
                </NavLink>
                <NavLink to="/service" className="nav-item nav-link">
                  Services
                </NavLink>
                <NavLink to="/pack" className="nav-item nav-link">
                  Packages
                </NavLink> */}
                <NavLink to="/blogManage" className="nav-item nav-link">
                  Blog
                </NavLink>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Tour
                  </a>
                  <div className="dropdown-menu m-0">
                    <NavLink to="/tourManage" className="dropdown-item">
                      Manage
                    </NavLink>
                    <NavLink to="/touradd" className="dropdown-item">
                      Tours Add
                    </NavLink>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0">
                    <NavLink to="/desti" className="dropdown-item">
                      Destination
                    </NavLink>
                    <NavLink to="/tour" className="dropdown-item">
                      Explore Tour
                    </NavLink>
                    <NavLink to="/Book" className="dropdown-item">
                      Travel Booking
                    </NavLink>
                    <NavLink to="/gallery" className="dropdown-item">
                      Our Gallery
                    </NavLink>
                    <NavLink to="/guide" className="dropdown-item">
                      Travel Guides
                    </NavLink>
                    <NavLink to="/testi" className="dropdown-item">
                      Testimonial
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
              </div>
              <a
                href
                className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4"
              >
                Book Now
              </a>
            </div>
          </nav>
        </div>
        {/* Navbar & Hero End */}
      </div>
    </div>
  );
}

export default Aheader;
