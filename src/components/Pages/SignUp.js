import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Auth.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
// import { useState } from "react";
import Box from "@mui/material/Box";
import { supabase } from "../../client";

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
    const first_name = firstNameRef.current.value;
    const last_name = lastNameRef.current.value;
    console.log(email, password, first_name, last_name);

    // Calls `signUp` function from the context
    // const { data, error } = await signUp(
    // { email, password },
    // { data: { first_name, last_name } }

    let { user, error } = await supabase.auth.signUp(
      { email: email, password: password },
      {
        data: {
          first_name: first_name,
          last_name: last_name,
        },
      }
    );

    // const { user_update, errorUpdate } = await supabase.auth.update({
    //   data: {
    //     first_name: first_name,
    //     last_name: last_name,
    //   },
    // });
    console.log("user:", user);
    // console.log("user_update:", user_update);
    // if (error || errorUpdate) {
    // console.log("data: ", data);
    if (error) {
      alert("error signing in");
    } else {
      // Redirect user to Dashboard
      navigate("/dashboard");
    }
  }

  return (
    <section className="container">
      <div className="left-half">
        <Typography
          sx={{
            width: "80%",
            m: "10%",
            backgroundColor: "transparent",
            fontFamily: "Ruda",
          }}
          variant="h4"
        >
          <i>Your direct</i> information source <i>for</i> common knowledge
          <i> and </i>current affairs<i> by </i>location.<br></br>
          <i>Your next adventure starts here.</i>
        </Typography>
      </div>
      <div className="right-half">
        {/* <div id="form" autoComplete="off" type="submit" onSubmit={handleSubmit}>{" "} */}
        <div id="form">
          <Grid container p={5} pt={10} pl={20}>
            <div id="header">
              <Typography pb={5} variant="h3">
                Create Account
              </Typography>
              <Button variant="outlined">
                <img
                  src="https://d3bz3ebxl8svne.cloudfront.net/production/static/svg/icon-google.svg"
                  alt="google"
                  width="20px"
                ></img>
                <Typography pl={1} variant="h6" justifyContent="center">
                  Continue with Google
                </Typography>
              </Button>

              <Typography mt={2} pb={3} variant="h6" justifyContent="center">
                <hr className="hr-text" data-content="OR" />{" "}
              </Typography>
            </div>
            <Box
              component="form"
              type="submit"
              onSubmit={handleSubmit}
              sx={{ width: "100%" }}
              spacing={3}
            >
              <Grid item xs={12}>
                <TextField
                  style={{ width: "50%" }}
                  inputProps={{ style: { fontSize: 20 } }}
                  InputLabelProps={{ style: { fontSize: 20 } }}
                  required
                  id="outlined-required-firstname-input"
                  label="First Name"
                  defaultValue=""
                  inputRef={firstNameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "50%" }}
                  inputProps={{ style: { fontSize: 20 } }}
                  InputLabelProps={{ style: { fontSize: 20 } }}
                  required
                  id="outlined-required-lastname-input"
                  label="Last Name"
                  defaultValue=""
                  inputRef={lastNameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "50%" }}
                  inputProps={{ style: { fontSize: 20 } }}
                  InputLabelProps={{ style: { fontSize: 20 } }}
                  required
                  id="outlined-required-email-input"
                  label="Email"
                  defaultValue=""
                  inputRef={emailRef}
                />
              </Grid>
              <Grid pb={2} item xs={12}>
                <TextField
                  style={{ width: "50%" }}
                  inputProps={{ style: { fontSize: 20 } }}
                  InputLabelProps={{ style: { fontSize: 20 } }}
                  required
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  defaultValue=""
                  inputRef={passwordRef}
                />
                <Grid pt={5} item xs={12}>
                  <Button
                    style={{ width: "50%", fontSize: 18 }}
                    variant="contained"
                    // href="profile"
                    // onClick={() => {
                    //   navigate("/user");
                    // }}
                    type="submit"
                  >
                    Create New Account
                  </Button>
                </Grid>{" "}
              </Grid>
            </Box>
            <Typography pt={3} variant="h6">
              Already have an account? <Link to="/login">Log In</Link>
            </Typography>
          </Grid>
        </div>
      </div>
    </section>
  );
}
