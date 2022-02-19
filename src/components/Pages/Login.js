import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import "./Auth.css"

function Login() {
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
        <Grid container spacing={3} p={5} pt={25} pl={20}>
          <div>
          <div>
          <Typography pb={5} variant="h3">Login</Typography>
          <Button variant="outlined">
            <img src="https://d3bz3ebxl8svne.cloudfront.net/production/static/svg/icon-google.svg" alt="google" width="20px"></img>
            <Typography pl={2} variant="h6" justifyContent="center">Sign in with Google</Typography>
          </Button>
          </div>
          <Typography mt={2} variant="h6" justifyContent="center">
            <hr class="hr-text" data-content="OR"/></Typography>        
          </div>
      <Grid item xs={12}>
        <TextField
          style ={{width: '40%'}}
          required
          id="outlined-required"
          label="username"
          defaultValue=""
          inputProps={{style: {fontSize: 20}}} // font size of input text
          InputLabelProps={{style: {fontSize: 20}}} // font size of input label
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          style ={{width: '40%'}}
          inputProps={{style: {fontSize: 20}}} 
          InputLabelProps={{style: {fontSize: 20}}} 
          required
          id="outlined-password-input"
          label="password"
          type="password"
          defaultValue=""
          autoComplete="current-password"
        />
        </Grid>
        <Grid pt={5} item xs={12}>
          <Button style ={{width: '40%', fontSize: 20}} variant="contained" href="user" onClick={() => {navigate("/user")}}>
            Login
          </Button>
        </Grid>
        </Grid>
        </div>
        </div>
      </section>
  );
}

export default Login;