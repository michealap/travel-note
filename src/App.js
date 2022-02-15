import "./App.css";
import Note from "./components/Note";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import BasicStats from "./components/BasicStats";
import Weather from "./components/Weather"
import axioscall from "./helpers/axioscall";
import Flag from './components/Flag';
import { useState } from 'react';



function App() {
  const [countryData, setCountryData] = useState();
  const [weatherData, setWeatherData] = useState();
  const [flagData, setFlagData] = useState();

  async function search(userInput) {
    let {countryStats, weatherStats} = await axioscall(userInput);
    console.log("Country Data", countryStats);
    setCountryData(countryStats);
    // console.log("Weather Data", weatherStats)
    setWeatherData(weatherStats);
    //console.log("Flag data", flag)
    setFlagData(countryStats);
  }

  return (
    <div>
      <Search placeholder="Adventure starts here..." search={search} />
      <hr />
      <Note />
      <NavBar placeholder="Search ..."/>
      {countryData && <BasicStats countryStats={countryData}/>}
      <hr />
      {weatherData && <Weather weatherStats={weatherData} countryStats={countryData}/>}
      {countryData && <Flag flag={flagData} countryStats={countryData}/>}
    </div>
  );
}

export default App;
