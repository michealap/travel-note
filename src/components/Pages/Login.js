import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { authContext } from "../../providers/AuthProvider.js";
import { useContext } from "react";

function Login() {
  let navigate = useNavigate();
  const { auth } = useContext(authContext);
  const { login } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = function (event) {
    event.preventDefault();
    email && login(email, password);
    navigate("/profile");
  };

  return (
    <div>
      <h1>Login</h1>
      {!auth && (
        <form onSubmit={onSubmit}>
          <Box
            // component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
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
                  label="Email"
                  defaultValue=""
                  type="text"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
              <Button
                variant="contained"
                // href="profile"
                type="submit"
                name="commit"
              >
                Login
              </Button>
            </Grid>
          </Box>
        </form>
      )}
    </div>
  );
}

export default Login;
