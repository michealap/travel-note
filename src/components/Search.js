import { useState, useEffect } from "react";
export default function Search() {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={(event) => event.preventDefault()} autoComplete="off">
        <input
          placeholder="Type your destination..."
          value={userInput}
          onChange={handleChange}
        />
        <button type="button">{"Search"}</button>
      </form>
    </div>
  );
}
