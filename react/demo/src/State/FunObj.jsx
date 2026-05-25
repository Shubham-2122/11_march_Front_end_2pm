import React, { useState } from "react";
import ImageData from "./ImageData";

function FunObj() {
  const [data, setdata] = useState({
    name: "shubham jadav",
    count: 0,
    isimage: true,
  });
  console.log(data);
  return (
    <div>
      <h1>Name: {data.name}</h1>
      <button onClick={() => setdata({ ...data, name: "sujal" })}>
        Chnage name
      </button>
      <button onClick={() => setdata({ ...data, name: "hello" })}>
        Chnage name 2
      </button>
      <h2>Counter : {data.count}</h2>
      <button onClick={() => setdata({ ...data, count: data.count + 1 })}>
        Increment
      </button>
      <button onClick={() => setdata({ ...data, count: data.count - 1 })}>
        Deccrement
      </button>
      <button onClick={() => setdata({ ...data, count: 0 })}>Reset</button>
      <br /> <hr /> <br />
      <button onClick={() => setdata({ ...data, isimage: false })}>hide</button>
      <button onClick={() => setdata({ ...data, isimage: true })}>Show</button>
      
      <button onClick={() => setdata({ ...data, isimage: !data.isimage })}>
        Toggle
      </button>
      {data.isimage ? <ImageData /> : false}
    </div>
  );
}

export default FunObj;
