import React, { useState } from "react";
import Aheader from "../Acoman/Aheader";
import Ahero from "../Acoman/Ahero";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ToursAdd() {

    const redirect= useNavigate()

  const [form, setform] = useState({
    id: "",
    name: "",
    catgegory: "",
    img: "",
  });

  //
  const getchage = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const getsubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/tours", form);
      setform({
        id: "",
        name: "",
        catgegory: "",
        img: "",
      });
      redirect("/tourManage")
    } catch (error) {
      console.log("Api data not Found", error);
    }
  };

  return (
    <div>
      <Aheader />
      <Ahero title="Tours add" name="Tours" />
      <div className="container-fluid booking py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 mx-auto">
              <h1 className="text-white mb-3">Tour Add Trip</h1>

              <form onSubmit={getsubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        id="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={getchage}
                        name="name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <select
                        className="form-select bg-white border-0"
                        id="select1"
                        value={form.catgegory}
                        onChange={getchage}
                        name="catgegory"
                      >
                        <option value="national">national</option>
                        <option value="international">international</option>
                      </select>
                      <label htmlFor="select1">catgegory</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="url"
                        className="form-control bg-white border-0"
                        id="img"
                        value={form.img}
                        onChange={getchage}
                        name="img"
                        placeholder="Your img"
                      />
                      <label htmlFor="img">Your image</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary text-white w-100 py-3"
                      type="submit"
                    >
                      tour add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToursAdd;
