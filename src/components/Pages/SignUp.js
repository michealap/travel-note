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
        backgroundColor: "transparent", fontFamily: "Ruda"}} variant="h4">
          <i>Your direct</i> information source <i>for</i> common knowledge<i> and </i>current affairs<i> by </i>location. <i>Your next adventure starts here.</i>
          </Typography>
      </div>
      <div className="right-half">
        <div id="form">
        <Grid container spacing={3} p={5} pt={10} pl={20}>
          <div>
          <div>
          <Typography pb={5} variant="h3">Create Account</Typography>
          <Button variant="outlined">
            <img src="https://d3bz3ebxl8svne.cloudfront.net/production/static/svg/icon-google.svg" alt="google" width="20px"></img>
            <Typography pl={2} variant="h6" justifyContent="center">Continue with Google</Typography>
          </Button>
          </div>
          <Typography mt={2} variant="h6" justifyContent="center"><hr class="hr-text" data-content="OR"/>  </Typography>          
          </div>
          <Grid item xs={12}>
          <TextField
          style ={{width: '40%'}}
          inputProps={{style: {fontSize: 20}}} 
          InputLabelProps={{style: {fontSize: 20}}} 
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
          />
          </Grid>
          <Grid item xs={12}>
            <TextField
            style ={{width: '40%'}}
            inputProps={{style: {fontSize: 20}}} 
            InputLabelProps={{style: {fontSize: 20}}} 
            required
            id="outlined-required"
            label="Last Name"
            defaultValue=""
          />
          </Grid>
          <Grid item xs={12}>
            <TextField
            style ={{width: '40%'}}
            inputProps={{style: {fontSize: 20}}} 
            InputLabelProps={{style: {fontSize: 20}}} 
            required
            id="outlined-required"
            label="Username"
            defaultValue=""
          />
          </Grid>
          <Grid item xs={12}>
          <TextField
            style ={{width: '40%'}}
            inputProps={{style: {fontSize: 20}}} 
            InputLabelProps={{style: {fontSize: 20}}} 
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            defaultValue=""
            autoComplete="current-password"
          />
          <Grid pt={5} item xs={12}>
          <Button  style ={{width: '40%', fontSize: 18}} variant="contained" href="profile" onClick={() => {navigate("/user")}}>
            Create New Account
          </Button>
          </Grid>
          </Grid>
          </Grid>
      </div>
        <Typography pl={20} variant="h6">
          Do you already have an account? Then <a href="/login">Sign in</a>
          </Typography>
        </div>
      </section>
  )
}