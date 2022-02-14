import "./App.css";
import Note from "./components/Note";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import NoteModal from "./components/NoteModal";
import BasicStats from "./components/BasicStats";
import axioscall from "./helpers/axioscall";
import { useState } from 'react';



function App() {
  const [countryData, setCountryData] = useState({});
  const [weatherData, setWeatherData] = useState({});

  console.log("countryData", countryData);
  async function search(userInput) {
    
    let {countryStats, weatherStats} = await axioscall(userInput);
    
    console.log("Country Data", countryStats);
    setCountryData(countryStats);
    console.log("Weather Data", weatherStats)
    setWeatherData(weatherStats)

  }

  return (
    <div>
      <Search placeholder="Adventure starts here..." search={search} />
      <hr />
      <Note />
      <NavBar placeholder="Search ..."/>
      {/* <NoteModal /> */}
      {countryData && <BasicStats countryStats={countryData}/>}
    </div>
  );
}

export default App;
