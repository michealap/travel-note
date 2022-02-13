import "./App.css";
import Note from "./components/Note";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import NoteModal from "./components/NoteModal";
import BasicStats from "./components/BasicStats";


function App() {
  return (
    <div>
      <Search placeholder="Adventure starts here..." />
      <hr />
      <Note />
      <NavBar placeholder="Search ..."/>
      <NoteModal />
      {/* <BasicStats /> */}
    </div>
  );
}

export default App;
