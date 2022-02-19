import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useAuth } from "../../providers/Auth";
import { useContext } from "react";
import { useRef } from "react";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  // Get signUp function from the auth context
  const { signIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    // @TODO: add login logic
    // Get email and password input values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
    // Calls `signIn` function from the context
    const { error } = await signIn({ email, password });

    if (error) {
      alert("error signing in");
    } else {
      // Redirect user to Dashboard
      navigate("/");
    }
  }

  let navigate = useNavigate();
  // const { auth } = useContext(authContext);
  // const { login } = useContext(authContext);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const onSubmit = function (event) {
  //   event.preventDefault();
  //   email && login(email, password);
  //   navigate("/profile");
  // };

  return (
    <div>
      <h1>Login</h1>
      {/* {!auth && ( */}
      {/* <form onSubmit={handleSubmit}> */}
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
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              type="email"
              name="email"
              inputRef={emailRef}
              // value={email}
              // onChange={(event) => setEmail(event.target.value)}
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
              inputRef={passwordRef}
              // value={password}
              // onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
          <Button
            variant="contained"
            // href="profile"
            type="submit"
            // name="commit"
          >
            Login
          </Button>
        </Grid>
      </Box>
      {/* </form> */}
      {/* )} */}
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
