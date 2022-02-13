import { useState } from "react";
import axioscall from "../helpers/axioscall";
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import BasicStats from './BasicStats';

export default function Search({ placeholder }) {
  const [userInput, setUserInput] = useState("");
  const [active, setActive] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  function search() {
    axioscall(userInput);
    setActive('basicStats');
  }

  return (
    <div>
    <div className="searchbarandbutton">
    <div className="searchbar">
        <div id="search">
        <input
          placeholder={placeholder}
          value={userInput}
          onChange={handleChange}
          onSubmit={setUserInput}
        />
        <button type="button" onClick={() => search()}>
        <SearchIcon id="button" />
        </button>
        </div>
      </div>
      <div className="logo"></div>
    </div>
    {active === "basicStats" && <BasicStats />}
    </div>
  );
}
