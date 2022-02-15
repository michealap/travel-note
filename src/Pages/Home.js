import React from "react";
import { useState } from "react";
import axioscall from "../helpers/axioscall";
import Note from "../components/Note";
import Search from "../components/Search";
import BasicStats from "../components/BasicStats";
import Weather from "../components/Weather";
import Flag from '../components/Flag';

// Material UI
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Home() {
  const [countryData, setCountryData] = useState();
  const [weatherData, setWeatherData] = useState();
  const [flagData, setFlagData] = useState();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function search(userInput) {
    let { countryStats, weatherStats } = await axioscall(userInput);
    setCountryData(countryStats);
    setWeatherData(weatherStats);
    setFlagData(countryStats);
  }

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <div>
      <Search placeholder="Adventure starts here..." search={search} />
      <hr />
      <Note />
      {countryData &&
      <Card sx={{ maxWidth: 1000, margin: 30 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="destination">
            {countryData.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={countryData.name}
        // subheader={Date.now()}
      />
      <CardMedia
        component="img"
        height="194"
        alt="Popular Places"
        image="Popular Places"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <Flag flag={flagData}/>   
          </Typography>
          <Typography paragraph>
            <BasicStats countryStats={countryData}/>
          </Typography>
          <Typography paragraph>
            <Weather weatherStats={weatherData} countryStats={countryData} />  
          </Typography>
          <Typography>
          </Typography>
        </CardContent>
      </Collapse>
      {/* <hr /> */}
      </Card>
      }
    </div>
  );
}

export default Home;
