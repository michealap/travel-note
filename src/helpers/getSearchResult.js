const axios = require("axios");

export default async function getSearchResult(countryName) {
  if (!countryName) {
    return;
  }

  const ninja_api_key = process.env.REACT_APP_NINJA_API_KEY;
  const weather_api_key = process.env.REACT_APP_WEATHER_KEY;
  const youtube_api_key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const news_api_key = process.env.REACT_APP_NEWS_API_KEY;
  const trip_api_key = process.env.REACT_APP_TRIP_API_KEY;
  
  let countryStats = {};
  let weatherStats = {};
  let videos = [];
  let newsList = {};
  let lat = {};
  let lng = {};
  let places = [];

  let currencyConvert = {};
  

  function standardize(input) {
    if(!input) {
      return;
    }
    let i = input.trim().toLowerCase();
    return i;
  }

  function validUrl(input) {
    console.log("The input", input);
    let sInput = standardize(input);
    let result = "";
    for (let i = 0; i < sInput.length; i++) {
      if (sInput[i] === " ") {
        result += "+";
      } else {
        result += sInput[i];
      }
    }
    return result;
  }

  function validCapital(input) {
    const badCapital = "Washington, D.C.";
    if (input === badCapital) {
      return "Washington";
    }
    return input; 
  }

  const validatedUrl = validUrl(countryName);
  const api_ninja_country = `https://api.api-ninjas.com/v1/country?name=${validatedUrl}`;
  const youtube_api_call = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=date&q=${validatedUrl}+vacation&key=${youtube_api_key}`;
  const news_api_call = 'http://api.mediastack.com/v1/news';
  
    //WORKING country api-call
    const res = await axios
      .get(api_ninja_country, {
        headers: {
          "X-Api-Key": ninja_api_key,
        },
      })
    
    countryStats = res.data[0];
    let city = validCapital(countryStats.capital);
    

    //WORKING weather api-call
    const weatherRes = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${weather_api_key}&q=${city}`)
    weatherStats = weatherRes.data.current;

     //WORKING youtube api-call
     const youtubeRes = await axios
     .get(youtube_api_call)
     
    videos = youtubeRes.data.items;

    

    if(countryStats) {
      let country = countryStats.iso2;

      const params = {
        access_key: news_api_key,
        languages: 'en',
        limit: 5,
        categories: 'general',
        countries: country,
        sort: 'published_desc'
      };

      await axios.get(news_api_call, {params})
      .then((res) => {
      newsList = res.data.data;
      });

      let exchangeCurrency = countryStats.currency.code;
      const currency_api_call = `https://api.api-ninjas.com/v1/convertcurrency?have=CAD&want=${exchangeCurrency}&amount=1`;

      await axios
      .get(currency_api_call, {
        headers: {
          "X-Api-Key": ninja_api_key,
        }
      })
      .then((res) => {
        currencyConvert = res.data;
      })

      // open trip needs coordinates - first use api ninja geocoding
      let name = countryStats.name;
      let coordinates_api_call = `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${name}`;
      const coordRes = await axios
      .get(coordinates_api_call, {
        headers: {
          "X-Api-Key": ninja_api_key,
        },
      })
      console.log("coordinates:", coordRes);

      lat = coordRes.data[0].latitude;
      console.log("lat:", lat);
      lng = coordRes.data[0].longitude;
      console.log("lng:", lng);

      // working trip call
      let trip_api_call =`https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${lng}&lat=${lat}&kinds=architecture%2Ccultural&limit=10&apikey=${trip_api_key}`;
      // https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=-76.7928128&lat=17.9712148&kinds=architecture%2Ccultural&limit=10&apikey=
  
      const tripRes = await axios
      .get(trip_api_call)
      places = tripRes.data.features;
    }
    
    
      console.log("places array:", places);
      console.log("News list", newsList);
      console.log("Currency convert", currencyConvert);
      console.log("country stats", countryStats);
      console.log("Weather stats", weatherStats);
      console.log('Video List', videos);
      if(countryStats && weatherStats && videos && currencyConvert && newsList) {
        return {countryStats, weatherStats, videos, currencyConvert, newsList, places}; 
      }

}