import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  return (
    <div>
      This is the Login page
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button
        onClick={() => {
          navigate("/register");
        }}
      >
        go to register
      </button>
    </div>
  );
}

export default Login;
