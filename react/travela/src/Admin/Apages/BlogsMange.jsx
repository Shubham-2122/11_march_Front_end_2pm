import React, { useEffect, useState } from "react";
import Aheader from "../Acoman/Aheader";
import Ahero from "../Acoman/Ahero";
import axios from "axios";
import useApi from "../../Customhooks/useApi";
import useSinglecard from "../../Customhooks/useSinglecard";

function BlogsMange() {
  // const [blog, setblog] = useState([]);

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  // const fetchdata = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3000/blogs");
  //     console.log(res.data);
  //     setblog(res.data);
  //   } catch (error) {
  //     console.log("Api Not Found", error);
  //   }
  // };
  useEffect(() => {
    fetchdata();
  }, []);

  const { api, fetchdata } = useApi("http://localhost:3000/blogs");
  const { view, singleView } = useSinglecard("http://localhost:3000/blogs");
  console.log(view)
  // console.log(api);

  // const [blogdata, setblogdata] = useState({
  //   id: "",
  //   name: "",
  //   img: "",
  //   desc: "",
  //   date: "",
  //   post: "",
  // });

  // const singleblog = async (id) => {
  //   try {
  //     const res = await axios.get(`http://localhost:3000/blogs/${id}`);
  //     // console.log(res.data);
  //     setblogdata(res.data);
  //   } catch (error) {
  //     console.log("Api data not found");
  //   }
  // };

  // console.log(blogdata);

  return (
    <div>
      <Aheader />
      <Ahero title="Blogs manage" name="Blogs" />
      <div className="container">
        <table className="table my-5 table-hover">
          <thead>
            <tr className="table-dark text-center">
              <th scope="col">#id</th>
              <th scope="col">name</th>
              <th scope="col">post</th>
              <th scope="col">date</th>
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
                    <td>{data.post}</td>
                    <td>{data.date}</td>
                    <td>
                      <img src={data.img} style={{ width: "100px" }} alt="" />
                    </td>
                    <td>
                      <button
                        className="bg-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => singleView(data.id)}
                      >
                        View
                      </button>
                      <button className="bg-success mx-2">Edit</button>
                      <button className="bg-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Blogs Card
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="col-12">
                <div className="blog-item">
                  <div className="blog-img">
                    <div className="blog-img-inner">
                      <img
                        style={{ height: "250px" }}
                        className="img-fluid w-100 rounded-top"
                        src={view.img}
                        alt="Image"
                      />
                      <div className="blog-icon">
                        <a href="#" className="my-auto">
                          <i className="fas fa-link fa-2x text-white" />
                        </a>
                      </div>
                    </div>
                    <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                      <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-calendar-alt text-primary me-2" />
                        {view.date}
                      </small>
                      <a
                        href="#"
                        className="btn-hover flex-fill text-center text-white border-end py-2"
                      >
                        <i className="fa fa-thumbs-up text-primary me-2" />
                        1.7K
                      </a>
                      <a
                        href="#"
                        className="btn-hover flex-fill text-center text-white py-2"
                      >
                        <i className="fa fa-comments text-primary me-2" />
                        1K
                      </a>
                    </div>
                  </div>
                  <div className="blog-content border border-top-0 rounded-bottom p-4">
                    <p className="mb-3">Posted By: {view.post} </p>
                    <a href="#" className="h4">
                      {view.name}
                    </a>
                    <p className="my-3">{view.desc}</p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill py-2 px-4"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsMange;
