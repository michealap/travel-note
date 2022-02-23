import React from "react";
import NavBar from "../NavBar";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';


function Logout() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <div>
      <NavBar />
      <Typography variant="h5" pt={8} textAlign="center">You've succefully logged out. 
      <br></br>
      <iframe src="https://giphy.com/embed/vBMzK6KN6M6zK" width="20%" height="25%" frameBorder="0" className="giphy-embed" allowFullScreen title="travel"></iframe>
      <br></br>
      <button style={{fontSize: '20px'}}aria-describedby={id} type="button" onClick={handleClick}>See you next time!</button> 
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 0, p: 0, bgcolor: 'transparent' }}>
        <iframe src="https://giphy.com/embed/qSHgHLHSPHDXhs763x" width="100%" height="100%" title="champagne" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </Box>
      </Popper>
      </Typography>
    </div>
  );
}

export default Logout;
