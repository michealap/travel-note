import "./App.css";
import Note from "./components/Note";
import Search from "./components/Search";
import { render } from "@testing-library/react";

function App() {
  return (
    <div>
      <Search />
      <hr />
      <Note />
    </div>
  );
}

export default App;
