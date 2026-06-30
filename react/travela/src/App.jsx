import React from "react";
import Home from "./website/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./website/Pages/About";
import Services from "./website/Pages/Services";
import Contact from "./website/Pages/Contact";
import Tesi from "./website/Pages/Tesi";
import Guide from "./website/Pages/Guide";
import Gallery from "./website/Pages/Gallery";
import Packages from "./website/Pages/Packages";
import Tour from "./website/Pages/Tour";
import Destination from "./website/Pages/Destination";
import Blogs from "./website/Pages/Blogs";
import Booking from "./website/Pages/Booking";
import NotFound from "./website/Pages/NotFound";
import Dashboard from "./Admin/Apages/Dashboard";
import BlogsMange from "./Admin/Apages/BlogsMange";
import TourManage from "./Admin/Apages/TourManage";
import ToursAdd from "./Admin/Apages/ToursAdd";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testi" element={<Tesi />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pack" element={<Packages />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/desti" element={<Destination />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/Book" element={<Booking />} />

          <Route path="*" element={<NotFound />} />

          {/* private routes */}
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/blogManage" element={<BlogsMange />} />
          <Route path="/tourManage" element={<TourManage />} />
          <Route path="/touradd" element={<ToursAdd />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
