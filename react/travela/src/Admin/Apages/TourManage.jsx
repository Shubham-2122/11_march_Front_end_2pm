import React, { useEffect } from "react";
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

  console.log(view)

  // delete tour 
  const deleteTour =async(id)=>{
    try {
      const res = await axios.delete(`http://localhost:3000/tours/${id}`)
      console.log(res.data)
      toast.success("tours data successfully deleted..")
      fetchdata()
    } catch (error) {
      console.log("Api data not Found",error)
    }
  }

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
                      <button className="bg-info" onClick={()=>singleView(data.id)}>View</button>
                      <button className="bg-success mx-2">Edit</button>
                      <button className="bg-danger" onClick={()=>deleteTour(data.id)}>Delete</button>
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

export default TourManage;
