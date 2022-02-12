import { useState } from "react";
import axioscall from "../helpers/axioscall";

export default function Search({placeholder}) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="App">
        <input id='search'
          placeholder={placeholder}
          value={userInput}
          onChange={handleChange}
          onSubmit={setUserInput}
        />
        <button type='button' onClick={()=>axioscall(userInput)}>search</button>
    </div>
  );
  
}
