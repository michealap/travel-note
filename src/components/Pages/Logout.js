import React from "react";
import NavBar from "../NavBar";
import Typography from "@mui/material/Typography";

function Logout() {
  return (
    <div>
      <NavBar />
      <Typography variant="h5" pt={8} textAlign="center">You've succefully logged out. See you next time! <br></br>
      <iframe src="https://giphy.com/embed/vBMzK6KN6M6zK" width="20%" height="25%" frameBorder="0" className="giphy-embed" allowFullScreen title="travel"></iframe>
      </Typography>
    </div>
  );
}

export default Logout;
