// import { useContext } from "react";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useAuth } from "../providers/Auth";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router";
import "./NavBar.css"


export default function NavBar(props) {
  const [userInput, setUserInput] = useState("");
  // const { useAuth } = useContext(useAuth);
  // console.log(props.match);
  // console.log(props.match.path);
  // console.log("auth:", auth);
  const { user, signOut } = useAuth();
  // let navigate = useNavigate();
  async function handleSignOut() {
    // Ends user session
    await signOut();

    // Redirects the user to Login page
    // navigate("/login");
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };

  function navSearch() {
    props.search(userInput);
    setUserInput("");
  }

return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="" >
        <Toolbar sx={{ justifyContent: 'space-evenly'}}>
        <form id="nav-form">
        <SearchIcon/>
        <input
          id="nav-input"
          placeholder="Search ..."
          value={userInput}
          onChange={handleChange}
          onSubmit={() => navSearch()}
        />
        </form>
         
         
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' } }}>
           <Link id="links" to="/about">
              {" "}
              About{" "}
            </Link>
        </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
          >
            {!user ? (
              <Link to="/login" id="links">
                {" "}
                Login{" "}
              </Link>
            ) : (
              <Link to="/logout" id="links" onClick={handleSignOut}>
                {" "}
                Logout{" "}
              </Link>
            )}
          </Typography>

          {!user && (
            <Box
              sx={{
                display: "flex",
                m: 1.5,
                flexGrow: -1,
                alignItems: "center",
                width: "fit-content",
                border: (theme) => `8px solid ${theme.palette.divider}`,
                padding: "5px",
                borderRadius: 1,
                color: "text.white",
                fontSize: "20px",
                "& svg": {
                  m: 2,
                },
                "& hr": {
                  mx: 0.5,
                },
              }}
            >
              <Button>
                <Link to="/signup" id="links">
                  {" "}
                  Create an account{" "}
                </Link>
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
