import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from"@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Auth.css"

export default function SignUp() {
  let navigate = useNavigate();

  return (
    <section className="container">
      <div className="left-half">
      <Typography sx={{ width: "80%", m: "10%",
        pt: 6, backgroundColor: "transparent"}} variant="h4">
          Your direct information source for common knowledge and current affairs by location. Your next adventure starts here.
          </Typography>
      </div>
      <div className="right-half">
        <div id="form">
        <Grid container spacing={3} p={5} pt={10} pl={20}>
          <div>
          <div>
          <Typography variant="h3">Create Account</Typography>
          <Button>
            <img src="https://d3bz3ebxl8svne.cloudfront.net/production/static/svg/icon-google.svg" alt="google" width="16px"></img>
            <Typography variant="h6" justifyContent="center">Continue with Google</Typography>
          </Button>
          </div>
          <span>-----------------------or----------------------</span>          
          </div>
          <Grid item xs={12}>
          <TextField
        required
        id="outlined-required"
        label="First Name"
        defaultValue=""
      />
      </Grid>
      <Grid item xs={12}>
          <TextField
        required
        id="outlined-required"
        label="Last Name"
        defaultValue=""
      />
      </Grid>
          <Grid item xs={12}>
          <TextField
        required
        id="outlined-required"
        label="Username"
        defaultValue=""
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
      />
      <Grid pt={5} item xs={12}>
      <Button  variant="contained" href="profile" onClick={() => {navigate("/user")}}>
        Create New Account
      </Button>
      </Grid>
      </Grid>
      </Grid>
      </div>
        <div>
          <p>Do you already have an account? Then <a href="/login">Sign in</a></p>
        </div>
        </div>
      </section>
  )
}