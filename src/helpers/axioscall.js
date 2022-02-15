const axios = require("axios");

export default async function axioscall(countryName) {
  if (!countryName) {
    return;
  }

  const ninja_api_key = process.env.REACT_APP_NINJA_API_KEY;
  const weather_api_key = process.env.REACT_APP_WEATHER_KEY;
  
  let countryStats = {};
  let weatherStats = {};
  

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
  
        
      
     
      console.log("country stats", countryStats);
      console.log("Weather stats", weatherStats);
      
    return {countryStats, weatherStats};  
}
