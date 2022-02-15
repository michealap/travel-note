import React from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Login() {
  let navigate = useNavigate();

  return (
    <div>
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
        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          defaultValue=""
          autoComplete="current-password"
        />
        <Button href="#text-buttons"
        onClick={() => {
          navigate("/user");
        }}>Login</Button>
        </Box>
    </div>
  );
}

export default Login;
