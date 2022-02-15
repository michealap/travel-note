import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Notes from "./Pages/Notes";
import Users from "./Pages/Users";


import Register from "./Pages/Register";
import ErrorPage from "./Pages/ErrorPage";

function App(props) {
  // console.log(props.match);
  // console.log(props.match.path);
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
          
        <Route path="/users" element={<Users />}></Route>

        <Route path={"/users/:userId"} element={<User />}></Route>
        <Route
          path={"/users/:userId/notes/:noteId"}
          element={<Notes />}
        ></Route>

        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
