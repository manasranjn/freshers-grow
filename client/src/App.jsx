import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserNavbar from "./Components/Common/UserNavbar";
import Home from "./Screens/Users/Home";
import Blogs from "./Screens/Users/Blogs";
import Contents from "./Screens/Users/Contents";
import Contact from "./Screens/Users/Contact";
import Login from "./Screens/NonAuth/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
