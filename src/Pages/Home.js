import React from "react";
import { useState } from "react";
import axioscall from "../helpers/axioscall";
import Note from "../components/Note";
import Search from "../components/Search";
import NavBar from "../components/NavBar";
import BasicStats from "../components/BasicStats";
import Weather from "../components/Weather";
import Flag from '../components/Flag';


function Home() {
  const [countryData, setCountryData] = useState();
  const [weatherData, setWeatherData] = useState();
  const [flagData, setFlagData] = useState();

  async function search(userInput) {
    let { countryStats, weatherStats } = await axioscall(userInput);
    // console.log("Country Data", countryStats);
    setCountryData(countryStats);
    // console.log("Weather Data", weatherStats)
    setWeatherData(weatherStats);
    setFlagData(countryStats);
  }
  return (
    <div>
      <Search placeholder="Adventure starts here..." search={search} />
      <hr />
      <Note />
      <NavBar placeholder="Search ..." />
      {countryData && <BasicStats countryStats={countryData} />}
      <hr />
      {weatherData && <Weather weatherStats={weatherData} countryStats={countryData} />}
      {countryData && <Flag flag={flagData}/>}
    </div>
  );
}

export default Home;
