import { useState } from "react";
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';

export default function Search (props) {
  
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  function onSearch() {
    props.search(userInput);
    setUserInput("");
  }

  return (
    <div>
    <div className="searchbarandbutton">
    <div className="searchbar">
        <div id="search">
        <input
          id="clear"
          placeholder={props.placeholder}
          value={userInput}
          onChange={handleChange}
          //onSubmit={setUserInput}
        />
        <button type="button" onClick={() => onSearch()}>
        <SearchIcon id="button" />
        </button>
        </div>
      </div>
      <div className="logo"></div>
    </div>
    </div>
  );
}