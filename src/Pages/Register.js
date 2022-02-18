import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { supabase } from "../client";

// import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
// const supabase = createClient(
//   "https://xyzcompany.supabase.co",
//   process.env.REACT_APP_PUBLIC_SUPABASE_ANON_KEY
// );

function Register() {
  // console.log("supabase:", supabase);
  let navigate = useNavigate();

  // States for registration
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleUsername = (e) => {
    setUserame(e.target.value);
    console.log("username: ", username);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log("email: ", email);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log("password: ", password);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit called");

    if (username === "" || email === "" || password === "") {
      setError(true);
    } else {
      // const { user, session, error } = supabase.auth.signUp(
      //   {
      //     email: email,
      //     password: password,
      //   },
      //   {
      //     data: {
      //       username: username,
      //     },
      //   }
      // );

      try {
        const { user, session, error } = supabase.auth.signUp(
          {
            email: email,
            password: password,
          },
          {
            data: {
              username: username,
            },
          }
        );
        if (error) throw error;
        alert("logged in");
      } catch (error) {
        alert(error.message);
        // setError(true);
        // setErrorMsg(err.msg);
        // return (
        //   <div>
        //     <h2>{err.code}</h2>
        //     <h2>{err.msg}</h2>
        //   </div>
        // );
      }
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>
          User {username} successfully registered!! {errorMsg}
        </h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>{errorMessage}</h1>
      </div>
    );
  };

  return (
    <div>
      <div style={{ color: "black" }}>
        <h2>User Registration</h2>
      </div>

      <div className="messages" style={{ color: "black" }}>
        {errorMessage()}
        {successMessage()}
      </div>
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          type="submit"
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id="outlined-required"
            label="Username"
            defaultValue=""
            // value={username}
            onChange={handleUsername}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            // value={email}
            onChange={handleEmail}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            defaultValue=""
            // value={password}
            onChange={handlePassword}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Repeat password"
            type="password"
            defaultValue=""
            // value={password}
            // onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            // onClick={() => {
            // registerNewUser(username, email, password);
            // navigate("/user");
            // }}
          >
            Register
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Register;
