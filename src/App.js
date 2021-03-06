import "./App.css";
// Navigation bar styles
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Typography from "@mui/material/Typography";


import "./components/Search.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Pages/Login";
import Logout from "./components/Pages/Logout";
import SignUp from "./components/Pages/SignUp";
import { Dashboard } from "./components/Pages/Dashboard";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";

function App() {
  const [countryData, setCountryData] = useState();
  function resetCountryData() {
    setCountryData();
  }

  return (
    <Router>
      <Link id="links" to="/" onClick={resetCountryData}> 
      <div>
        <div id="left">
       <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontFamily: "Ruda" } }}> 
                {/* home page */}
                TravelNotes<DoubleArrowIcon />
          </Typography>
          </div>
          <div id="right"></div>
        </div>
      </Link>
      <Routes>
        <Route path="/" element={
        <>
        <NavBar resetCountryData={()=> resetCountryData()}/>
        <Home countryData={countryData} setCountryData={setCountryData}
        />
        </>
      }/>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard resetCountryData={()=> resetCountryData()}/>} />
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
