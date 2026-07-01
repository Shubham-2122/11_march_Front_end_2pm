import React, { useEffect, useState } from "react";
import useApi from "../../Customhooks/useApi";
import Aheader from "../Acoman/Aheader";
import Ahero from "../Acoman/Ahero";
import useSinglecard from "../../Customhooks/useSinglecard";
import axios from "axios";
import { toast } from "react-toastify";

function TourManage() {
  useEffect(() => {
    fetchdata();
  }, []);

  const { api, fetchdata } = useApi("http://localhost:3000/tours");
  const { view, singleView } = useSinglecard("http://localhost:3000/tours");
  // console.log(api)

  // console.log(view)

  // delete tour
  const deleteTour = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/tours/${id}`);
      // console.log(res.data)
      toast.success("tours data successfully deleted..");
      fetchdata();
    } catch (error) {
      console.log("Api data not Found", error);
    }
  };

  const [editmodel, setedimodel] = useState(null);
  const [edit, setedit] = useState({
    id: "",
    name: "",
    catgegory: "",
    img: "",
  });

  const openmodel = (data) => {
    setedimodel(data);
    setedit(data);
    console.log(data);
  };

  const getchange = (e) => {
    setedit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const upatetour = async (e) => {
    e.preventDefault();

    if (edit.catgegory == "" || edit.img == "" || edit.name == "") {
      console.log("pls Field data..");
      toast.error("pls Field data..");
      return false;
    }
    try {

        const res = await axios.put(`http://localhost:3000/tours/${edit.id}`,edit)
        toast.success("Edited Successfully");
        setedimodel(null)
        fetchdata()

    } catch (error) {
      toast.error("Api data not Found");
    }
  };

  return (
    <div>
      <Aheader />
      <Ahero title="Tour Category Manage" name="Tour" />

      <div className="container">
        <table className="table my-5 table-hover">
          <thead>
            <tr className="table-dark text-center">
              <th scope="col">#id</th>
              <th scope="col">name</th>
              <th scope="col">catgegory</th>
              <th scope="col">img</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {api &&
              api.map((data, index) => {
                return (
                  <tr className="text-center" key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.catgegory}</td>
                    <td>
                      <img src={data.img} style={{ width: "100px" }} alt="" />
                    </td>
                    <td>
                      <button
                        className="bg-info"
                        onClick={() => singleView(data.id)}
                      >
                        View
                      </button>
                      <button
                        className="bg-success mx-2"
                        onClick={() => openmodel(data)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-danger"
                        onClick={() => deleteTour(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {editmodel && (
        <div className="container-fluid booking py-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-8 mx-auto">
                <h1 className="text-white mb-3">Tour Update Trip</h1>

                <form>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-white border-0"
                          id="name"
                          placeholder="Your Name"
                          value={edit.name}
                          onChange={getchange}
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
                          value={edit.catgegory}
                          onChange={getchange}
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
                          value={edit.img}
                          onChange={getchange}
                          name="img"
                          placeholder="Your img"
                        />
                        <label htmlFor="img">Your image</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-md-6">
                          <button
                            className="btn btn-primary text-white w-100 py-3"
                            type="submit" onClick={upatetour}
                          >
                            tour Update
                          </button>
                        </div>
                        <div className="col-md-6">
                          <button
                            className="btn btn-primary text-white w-100 py-3"
                            type="submit"
                            onClick={() => setedimodel(null)}
                          >
                            tour cancle
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TourManage;
