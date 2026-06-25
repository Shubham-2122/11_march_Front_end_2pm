import React, { useEffect, useState } from "react";
import Aheader from "../Acoman/Aheader";
import Ahero from "../Acoman/Ahero";
import axios from "axios";

function BlogsMange() {
  const [blog, setblog] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const res = await axios.get("http://localhost:3000/blogs");
      console.log(res.data);
      setblog(res.data);
    } catch (error) {
      console.log("Api Not Found", error);
    }
  };

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
            {blog &&
              blog.map((data, index) => {
                return (
                  <tr className="text-center" key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.post}</td>
                    <td>{data.date}</td>
                    <td><img src={data.img} style={{width:"100px"}} alt="" /></td>
                    <td>
                        <button className="bg-info">View</button>
                        <button className="bg-success mx-2">Edit</button> 
                        <button className="bg-danger">Delete</button>   
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogsMange;
