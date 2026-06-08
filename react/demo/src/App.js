import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
// import Boot from "./Boostrapda/Boot";
// import ReactBoot from "./Boostrapda/ReactBoot";
// import Footerdata from "./Boostrapda/Footerdata";
// import Alogin from "./Boostrapda/Alogin";
// import A from "./Context/Drilling/A";
// import ChildA from "./Context/UseContextdata/ChildA";
// import Effect from "./Effect/Effect";
// import UseTable from "./Effect/UseTable";
// import UseAxios from "./Effect/UseAxios";
// import UseCard from "./Effect/UseCard";
// import FormData from "./Formhadling/FormData";
// import FormObj from "./Formhadling/FormObj";
// import MainProps from "./Props/MainProps";
// import MainState from "./State/MainState";
// import Css from "./Css/Css";
// import Hello from "./JSX/Hello";
// import ClassCompo from "./Component/ClassCompo";
// import FunCompo from "./Component/FunCompo";

function App() {
    return (
        <BrowserRouter>
        <div>
            {/* <h1>Hello this App Js file</h1> */}
            
            {/* compeoent */}
            {/* <ClassCompo />
            <ClassCompo />
            <FunCompo /> */}

            {/* JSX Compoenent */}
            {/* <Hello /> */}

            {/* css  */}
            {/* <Css /> */}

            {/* Props */}
            {/* <MainProps /> */}

            {/* State */}
            {/* <MainState /> */}

            {/* FormHadling */}
            {/* <FormData /> */}
            {/* <FormObj /> */}

            {/* UseEffect  */}
            {/* <Effect /> */}
            {/* <UseTable /> */}
            {/* <UseAxios /> */}
            {/* <UseCard /> */}

            {/* UseContext */}
            {/* <A /> */}
            {/* <ChildA /> */}

            {/* bootstrap */}
            {/* <Boot /> */}
            {/* <ReactBoot /> */}
         {/* <Alogin /> */}
            {/* <Footerdata />  */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </div>
        </BrowserRouter>
    )
}

export default App;