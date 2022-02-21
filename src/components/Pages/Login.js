import { useNavigate, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import { useState } from "react";
// import { useContext } from "react";
import { useAuth } from "../../providers/Auth";
import { useRef } from "react";
import "./Auth.css";

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
      navigate("/user");
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
        <form
          id="form"
          autoComplete="off"
          type="submit"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2} p={4} pt={15} pl={20} pr={10}>
            <div>
              <div>
                {/* {!auth && ( */}
                {/* <form onSubmit={handleSubmit}> */}
                <Typography pb={5} variant="h3">
                  Login
                </Typography>
                <Button variant="outlined">
                  <img
                    src="https://d3bz3ebxl8svne.cloudfront.net/production/static/svg/icon-google.svg"
                    alt="google"
                    width="20px"
                  ></img>
                  <Typography ml={5} pr={3} variant="h6" justifyContent="center">
                    Sign in with Google
                  </Typography>
                </Button>
              </div>
              <Typography mt={2} variant="h6" justifyContent="center">
                <hr class="hr-text" data-content="OR" />
              </Typography>
            </div>
            <Grid item xs={12}>
              <TextField
                style={{ width: "50%"}}
                required
                id="outlined-required"
                label="Email"
                defaultValue=""
                type="email"
                name="email"
                inputRef={emailRef}
                inputProps={{ style: { fontSize: 20 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: "50%" }}
                inputProps={{ style: { fontSize: 20 } }}
                InputLabelProps={{ style: { fontSize: 20 } }}
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                defaultValue=""
                autoComplete="current-password"
                inputRef={passwordRef}
              />
            </Grid>
            <Grid pt={5} item xs={12}>
              <Button
                style={{ width: "50%", fontSize: 20 }}
                variant="contained"
                // href="profile"
                type="submit"
                // name="commit"
                // href="profile"
                // onClick={() => {navigate("/user")}}
              >
                Login
              </Button>
            </Grid>
        <Typography pt={4} variant="h6">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
          </Grid>
        </form>
      </div>
    </section>
  );
}

export default Login;
