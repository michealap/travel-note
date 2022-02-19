import "./App.css";
// Navigation bar styles
import React, { useState } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Typography from "@mui/material/Typography";

import "./components/Search.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import NavBar from "./components/NavBar";
import User from "./components/Pages/User";
import Login from "./components/Pages/Login";
import Logout from "./components/Pages/Logout";
import Notes from "./components/Pages/Notes";
import SignUp from "./components/Pages/SignUp";
import { Dashboard } from "./components/Pages/Dashboard";

import ErrorPage from "./components/Pages/ErrorPage";
import Profile from "./components/Pages/Profile";

function App(props) {
  const [countryData, setCountryData] = useState();
  function resetCountryData() {
    setCountryData();
  }

  return (
    <Router>
      <div>
        <div id="left">
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {/* home page */}
            <a id="links" href="/" onClick={resetCountryData}>
              TravelNotes
              <DoubleArrowIcon />
            </a>
          </Typography>
        </div>
        <div id="right"></div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home countryData={countryData} setCountryData={setCountryData} />
            </>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="/user" element={<User />}></Route>

        <Route
          path={"/users/:userId/notes/:noteId"}
          element={<Notes />}
        ></Route>

        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
export default App;
