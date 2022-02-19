import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import "./NavBar.css";

export default function NavBar(props) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
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
          onSubmit={navSearch}
        />
        </form>
         
         
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' } }}>
          <a id="links" href="about"> About </a>
        </Typography>
        

        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' } }}>
            <a id="links" href="login"> Login </a>
          </Typography>
          <Box
          sx={{
          display: 'flex',
          m:0,
          flexGrow: -1,
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `4px solid ${theme.palette.divider}`,
          padding: '5px',
          borderRadius: 1,
          color: 'text.white',
          fontSize: '20px',
          '& svg': {
            m: 2,
          },
          '& hr': {
            mx: 0.5,
          },
          }}>
          <a id="links" href="signup" >
        <Button style={{backgroundColor: '#eb8200', color: '#FFFFFF'}}>
         Create an account 
         </Button>
         </a>
         </Box>
        </Toolbar>
      </AppBar>
    </Box>
)}