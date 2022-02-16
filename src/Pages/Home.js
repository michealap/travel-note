import React from "react";
import { useState } from "react";
import axioscall from "../helpers/axioscall";
import Note from "../components/Note";
import Search from "../components/Search";
import BasicStats from "../components/BasicStats";
import Weather from "../components/Weather";
import Flag from '../components/Flag';
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";

// Material UI
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Home() {
  const [countryData, setCountryData] = useState();
  const [weatherData, setWeatherData] = useState();
  const [expanded, setExpanded] = React.useState(true);
  const [videosData, setVideosData] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  async function search(userInput) {
    let { countryStats, weatherStats, videos } = await axioscall(userInput);
    setCountryData(countryStats);
    setWeatherData(weatherStats);
    setVideosData(videos);
    setSelectedVideo(videos[0]);
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
      <Card sx={{ maxWidth: 1280, margin: 10 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[400] }} aria-label="destination">
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
      <Flag flag={countryData}/> 
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
          <BasicStats countryStats={countryData}/>
          <Weather weatherStats={weatherData} countryStats={countryData} />
        </CardContent>
      </Collapse>
      <h2>This Week's Popular Videos</h2>
      <Stack
        sx={{ width: '100%', mb: 1 }}
        direction="row"
        alignItems="flex-start"
        columnGap={1}
      >
        <VideoDetail video={selectedVideo}/>
      
        <VideoList sx={{}} videos={videosData} setSelectedVideo={setSelectedVideo}/>
        </Stack>
      </Card>
      }
    </div>
  );
}

export default Home;
