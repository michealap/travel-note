import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { authContext } from "../providers/AuthProvider";
import { useContext } from "react";

function Login() {
  // let navigate = useNavigate();
  const { auth } = useContext(authContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);

  const onSubmit = function (event) {
    event.preventDefault();
    email && login(email, password);
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
            <TextField
              required
              id="outlined-required"
              label="Username"
              defaultValue=""
              type="text"
              name="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
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
            <Button
              type="submit"
              name="commit"
              // onClick={() => {
              //   navigate("/user");
              // }}
            >
              Login
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
}

export default Login;
