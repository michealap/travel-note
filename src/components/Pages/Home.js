import React from "react";
import { useState } from "react";
import getSearchResult from "../../helpers/getSearchResult";
import Note from "../Note";
import NoteModal from "../NoteModal";
import Search from "../Search";
import BasicStats from "../SearchResults/BasicStats";
import Weather from "../SearchResults/Weather";
import Flag from '../SearchResults/Flag';
import VideoList from "../SearchResults/VideoList";
import VideoDetail from "../SearchResults/VideoDetail";
import NewsList from "../SearchResults/NewsList";
import NewsDetail from "../SearchResults/NewsDetail";
import Currency from "../SearchResults/Currency";

// Material UI
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Home(props) {
  const { countryData, setCountryData } = props;
  const [weatherData, setWeatherData] = useState();
  const [expanded, setExpanded] = React.useState(true);
  const [currencyData, setCurrencyData] = useState();
  const [videosData, setVideosData] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [newsListData, setNewsListData] = useState();
  const [loading, setLoading] = useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleFavorite = () => {
    console.log("Added to Favorite");
  }

  async function search(userInput) {
    setLoading(true);
    let { countryStats, weatherStats, videos, currencyConvert, newsList } = await getSearchResult(userInput);
    setCountryData(countryStats);
    setWeatherData(weatherStats);
    setVideosData(videos);
    setNewsListData(newsList);
    setSelectedVideo(videos[0]);
    setCurrencyData(currencyConvert);
    setLoading(false);
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
      <Search placeholder="Adventure starts here..." search={search} loading={loading} />
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
          <IconButton aria-label="add to favorites"  onClick={handleFavorite}>
          <FavoriteIcon />
          </IconButton>
        // <IconButton aria-label="share">
        //   <ShareIcon />
        // </IconButton>
        }
        title={countryData.name}
        // subheader={Date.now()}
      />
      <Stack 
        sx={{ width: '100%', mb:1, pl:10 }}
        direction="row"
        alignItems="flex-start"
        columnGap={2}>
          <Flag flag={countryData}/>
          <div width="100%"></div>
          <Weather sx={{display:'flex', justifyContent: 'right'}} weatherStats={weatherData} countryStats={countryData} />
        </Stack>
      
    <CardActions>        
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
      <BasicStats countryStats={countryData} />
      <Currency currency={currencyData} />
      <NewsDetail />
      <NewsList newsList={newsListData} />
      </Collapse>

      <Stack
        sx={{ width: '100%', mb: 1 }}
        direction="row"
        alignItems="flex-start"
        columnGap={1}
      >
        <VideoDetail video={selectedVideo}/>
        <VideoList sx={{}} videos={videosData} setSelectedVideo={setSelectedVideo}/>
        </Stack>
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
