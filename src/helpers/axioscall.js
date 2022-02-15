const axios = require("axios");

export default async function axioscall(countryName) {
  if (!countryName) {
    return;
  }

  const ninja_api_key = process.env.REACT_APP_NINJA_API_KEY;
  const weather_api_key = process.env.REACT_APP_WEATHER_KEY;
  const youtube_api_key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const news_api_key = process.env.REACT_APP_NEWS_API_KEY;
  
  let countryStats = {};
  let weatherStats = {};
  let videoList = {};
  let newsList = {};
  

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
  const youtube_api_call = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=date&q=${validatedUrl}&key=${youtube_api_key}`;
  const news_api_call = `https://newsapi.org/v2/everything?q=${validatedUrl}+vacation&from=2021-02-15&to=2022-02-15&sortBy=popularity&pageSize=5&apiKey=${news_api_key}`
  
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
      
    videoList = youtubeRes.data;
    
    //News api-call
    const newsRes = await axios
      .get(news_api_call)
      .catch((err) => {
        console.log("News Error", err);
      })

    newsList = newsRes;
  
        
    console.log("News res", newsList);
    console.log("youtube res", videoList); 
    console.log("country stats", countryStats);
    console.log("Weather stats", weatherStats);
      
    return {countryStats, weatherStats, videoList };  
}

//YOUTUBE Call WORKS - regular validation works 
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=date&q=united+states&key=

//News call
