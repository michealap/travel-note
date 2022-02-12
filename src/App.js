import "./App.css";
import Note from "./components/Note";
import Search from "./components/Search";


function App() {
  return (
    <div>
      <Search placeholder="Type your destination..." />
      <hr />
      <Note />
    </div>
  );
}

export default App;
