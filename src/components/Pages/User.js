import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';

function User() {
  let navigate = useNavigate();
  let { userId } = useParams();
  console.log(useParams());
  const [value, setValue] = React.useState(0);

  return (
    <Typography pt={10} variant="h5">
      This is the profile page for user with id of {userId}
      <Stack direction="row" spacing={20} sx={{width: "90%", m: "5%", pl: 60}}>
        <Avatar /> First, LastName
        <EditIcon />
      </Stack>
      <hr class="hr-text"/>
      <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Home" icon={<HomeIcon />}onClick={() => {
          navigate("/");
        }} />
      </BottomNavigation>
    </Box>
      {/* <Button variant="outlined"
        onClick={() => {
          navigate("/");
        }}
      >
        go to Home
      </Button> */}
    </Typography>
  );
}

export default User;
