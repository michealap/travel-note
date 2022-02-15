import React from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Register() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Register</h1>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      type="submit"
      > 
        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="email"
          defaultValue="example@example.com"
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-password-input"
          label="Repeat password"
          type="password"
          defaultValue=""
        />
        <Button href="#text-buttons"
        onClick={() => {
          navigate("/register");
        }}>Register</Button>
        </Box>
    </div>
  )
}

export default Register;
