import React from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function Login() {
  let navigate = useNavigate();

  return (
    <div >
      <h1>Login</h1>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      type="submit"
      > 
      <Grid container spacing={0}>
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
        </Grid>
        <Button variant="contained" href="profile" onClick={() => {navigate("/user")}}>
          Login
        </Button>
        </Grid>
        </Box>
    </div>
  );
}

export default Login;