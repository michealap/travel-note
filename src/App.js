import "./App.css";
// Navigation bar styles
import React, { useState, useRef } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import "./components/Search.css";

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Notes from "./Pages/Notes";
import Users from "./Pages/Users";


import Register from "./Pages/Register";
import ErrorPage from "./Pages/ErrorPage";

function App(props) {
  const [countryData, setCountryData] = useState();

  const [mainLoading, setMainLoading] = useState(false);
  const [searchField, setSearchField] = useState("");
  const searchRef = useRef("");

 

  // pass down value directly to async function in Home
  const getSearchValue = (userInput) => {
    setSearchField(userInput);   
    
  }
  const handleEnter = (event) => {
    event.preventDefault();
    setSearchField(searchRef.current.value);
    
    // getSearchValue(searchField);
  }
  // const handleChange = (e) => {
  //   console.log("e.target.value- handlechange", e.target.value);
  //   setSearchField(e.target.value);
  //   // setKey((prev)=> prev+1);
  // };
  if(mainLoading){
    return <div><CircularProgress color="success" /></div>;
  }
  // when home link is clicked reset countryData from api to null
  function resetCountryData() {
    setCountryData();
  }


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}> 
                {/* home page */}
                <Link id="links" to="/" onClick={resetCountryData}> TravelNotes
                 </Link>
          </Typography>
          
          {/* NavBar search */}
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              // value={searchField}
              inputProps={{ 'aria-label': 'search', value : searchField, onInput: (e)=>handleKeyDown(e)}}
              // onKeyDown={(e)=>handleKeyDown(e)}
            />
          </Search> */}
          <form>
          <label>
            Search...
          </label>
          <input type="text" name="name" ref={searchRef} />
          <input type="submit" value="submit" onClick={(event)=>handleEnter(event)} />
        </form>
        
          <Box
          sx={{
          display: 'flex',
          m:1.5,
          flexGrow: -1,
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `8px solid ${theme.palette.divider}`,
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
            <Link id="links" to="login"> Login </Link>
            <Divider orientation="vertical" flexItem />
            <Link id="links" to="register"> Register </Link>
            </Box>
         
        </Toolbar>
      </AppBar>
    </Box>
      <Routes>
        <Route path="/" element={<Home countryData={countryData} setCountryData={setCountryData} getSearchValue={(inputValue)=>getSearchValue(inputValue)} searchField={searchField}
        mainLoading={mainLoading} setMainLoading={setMainLoading}/>}/>


        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
          
        <Route path="/users" element={<Users />}></Route>

        <Route path={"/users/:userId"} element={<User />}></Route>
        <Route
          path={"/users/:userId/notes/:noteId"}
          element={<Notes />}
        ></Route>

        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
export default App;
