import "./App.css";
// Navigation bar styles
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import NoteModal from './components/NoteModal';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

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
                <Link id="links" to="/"> TravelNotes </Link>
          </Typography>
          <Typography sx= {{ flexGrow: 0 }}><NoteModal /></Typography>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        
          <Box
          sx={{
          display: 'flex',
          flexGrow: -1,
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `8px solid ${theme.palette.divider}`,
          padding: '5px',
          borderRadius: 1,
          color: 'text.white',
          fontSize: '22px',
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
        <Route path="/" element={<Home />} />
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
