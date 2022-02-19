import { useState } from "react";
import "./Search.css";
import CircularProgress from '@mui/material/CircularProgress';
import SearchIcon from '@mui/icons-material/Search';

export default function Search (props) {
  const { loading } = props;
  console.log("inside search:", props)
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
        {loading === true ? (<CircularProgress color="success" style={{padding: "10px"}}/>): (<button type="button" onClick={() => onSearch()}>
        <SearchIcon id="button" />
        </button>)}
        </div>
      </div>
      <div className="logo"></div>
    </div>
    </div>
  );
}