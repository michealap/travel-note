import React from "react";
import { useState } from "react";
import axioscall from "../helpers/axioscall";
import Note from "../components/Note";
import NoteModal from "../components/NoteModal";
import Search from "../components/Search";
import BasicStats from "../components/BasicStats";
import Weather from "../components/Weather";
import Flag from '../components/Flag';
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";
import News from "../components/News";

// Material UI
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
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
  const [loading, setLoading] = useState(true);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  

  async function search(userInput) {
    let { countryStats, weatherStats, videos } = await axioscall(userInput);
    setCountryData(countryStats);
    setWeatherData(weatherStats);
    setVideosData(videos);
    setSelectedVideo(videos[0]);
    // aim to get this to work
    if(loading) {
      setTimeout(() => {
        setLoading(false); 
      }, 5000);
      return <div><CircularProgress color="success" /></div>;
    }

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
      {!countryData && <div>
      <Search placeholder="Adventure starts here..." search={search} />
      <Note />
      </div>
      }
      
      {/* if country Data is present render the following */}
      {countryData &&
      <Card sx={{ width: '90%', margin: '5%', justifyContent: 'center' }} >
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
      <Stack 
        sx={{ width: '100%', mb:1 }}
        direction="row"
        alignItems="flex-start"
        columnGap={2}>
          <Flag flag={countryData}/>
          <div width="100%"></div>
          <Weather sx={{display:'flex', justifyContent: 'right'}} weatherStats={weatherData} countryStats={countryData} />
          {/* <BasicStats countryStats={countryData}/> */}
        </Stack>
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
      <BasicStats countryStats={countryData}/>
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
        <News />
        <hr />
        <h1>Destination Notes</h1>
          <Note />
          <Typography variant="h5" color="text.secondary">
          Visited here? Please share your experience<NoteModal />
        </Typography>
      </Card>
      }
    </div>
  );
}

export default Home;
