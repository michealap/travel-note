const axios = require("axios");

export default function axioscall(countryName) {
  const ninja_api_key = process.env.REACT_APP_NINJA_API_KEY;
  const weather_api_key = process.env.REACT_APP_WEATHER_KEY;
  console.log("Weather api key", weather_api_key);

  let countryStats = [];
  function standardize(input) {
    // console.log("here", input);
    let i = input.trim().toLowerCase();
    // console.log("here", i);
    return i;
  }

  function validUrl(input) {
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
  

    /* axios
      .get(api_ninja_country, {
        headers: {
          "X-Api-Key": ninja_api_key,
        },
      })
      .then((res) => {
        console.log(res.data[0]);
        countryStats = res.data[0];
        console.log("Country Stats", countryStats)
      }).catch(err => {
        console.log(err);
      }) */

    axios
      .get(api_ninja_country, {
        headers: {
          "X-Api-Key": ninja_api_key,
        },
      })
      .then((res) => {
        //console.log("ninja data", res.data[0].capital);
        //console.log("weather api key", weather_api_key);
        let city = validCapital(res.data[0].capital);
        //console.log("City", city);
        return axios.get(`http://api.weatherapi.com/v1/current.json?key=${weather_api_key}&q=${city}`)
        .then((res) => {
          console.log("weather data", res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        })
      })
      

     // WORKS: http://api.weatherapi.com/v1/current.json?key=c353a72ace5742e490d191454221202&q=$Ottawa

    return countryStats;

    
}
