import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Auth.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import Box from "@mui/material/Box";

export default function SignUp() {
  let navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  // Get signUp function from the auth context
  const { signUp } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    // @TODO: add sign up logic
    // Get email and password input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    console.log(email, password, firstName, lastName);

    // Calls `signUp` function from the context
    const { error } = await signUp({
      email,
      password,
      firstName,
      lastName,
    });

    if (error) {
      alert("error signing in");
    } else {
      // Redirect user to Dashboard
      navigate("/");
    }
  }

  return (
    <section className="container">
      <div className="left-half">
        <Typography
          sx={{ width: "80%", m: "10%", pt: 6, backgroundColor: "transparent" }}
          variant="h4"
        >
          Your direct information source for common knowledge and current
          affairs by location. Your next adventure starts here.
        </Typography>
      </div>
      <div className="right-half">
        <div id="form">
          {" "}
          <Grid container spacing={3} p={5} pt={10} pl={20}>
            <div>
              <div>
                <Typography variant="h3">Create Account</Typography>
                <Button>
                  <img
                    src="https://d3bz3ebxl8svne.cloudfront.net/production/static/svg/icon-google.svg"
                    alt="google"
                    width="16px"
                  ></img>
                  <Typography variant="h6" justifyContent="center">
                    Continue with Google
                  </Typography>
                </Button>
              </div>
              <span>-----------------------or----------------------</span>
            </div>
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
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required-firstname-input"
                  label="First Name"
                  defaultValue=""
                  inputRef={firstNameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required-lastname-input"
                  label="Last Name"
                  defaultValue=""
                  inputRef={lastNameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required-email-input"
                  label="Email"
                  defaultValue=""
                  inputRef={emailRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  defaultValue=""
                  autoComplete="current-password"
                  inputRef={passwordRef}
                />
                <Grid pt={5} item xs={12}>
                  <Button
                    variant="contained"
                    // href="profile"
                    type="submit"
                    // onClick={() => {
                    //   navigate("/user");
                    // }}
                  >
                    Create New Account
                  </Button>
                </Grid>
              </Grid>{" "}
            </Box>
          </Grid>
        </div>
        <div>
          {/* <p>
            Do you already have an account? Then <a href="/login">Sign in</a>
          </p> */}
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
