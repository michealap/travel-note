// import { useState } from "react";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth } from "../providers/Auth";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./NavBar.css";

export default function NavBar(props) {
  const { resetCountryData } = props;
  const { user, signOut } = useAuth();
  async function handleSignOut() {
    // Ends user session
    await signOut();
    // Redirects the user to Logout page
  }

  return (
      <AppBar position="static" color="">
        <Toolbar sx={{ justifyContent: "space-evenly" }}>
           <Typography
            variant="h6"
            component="div"
            sx={{ pl: "10%", flexGrow: 0, display: { xs: "none", sm: "block" } }}
          >
            <Link id="links" to="/" onClick={resetCountryData}>
              {" "}
              Home{" "}
            </Link>
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
          >
            <Link id="links" to="about" onClick={resetCountryData}>
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
              <Link to="/login" id="links" onClick={resetCountryData}>
                {" "}
                Login{" "}
              </Link>
            ) : (
              <Link to="/dashboard" id="links">
                {" "}
                <Button><Avatar /></Button>{" "}
              </Link> &&
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
  );
}
