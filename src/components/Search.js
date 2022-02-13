import { useState } from "react";
import axioscall from "../helpers/axioscall";
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';

export default function Search({ placeholder }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="searchbarandbutton">
    <div className="searchbar">
        <div id="search">
        <input
          placeholder={placeholder}
          value={userInput}
          onChange={handleChange}
          onSubmit={setUserInput}
        />
        <button type="button" onClick={() => axioscall(userInput)}>
        <SearchIcon id="button" />
        </button>
        </div>
      </div>
      <div className="logo"></div>
    </div>
  );
}
