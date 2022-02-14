import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Routes path="/logout" element={Logout} /> */}
        {/* <Route path="/user:id/notes:id" element={User} /> */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="user/:id" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
