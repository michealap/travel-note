import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../NavBar";

function Profile() {
  let navigate = useNavigate();
  let { userId } = useParams();
  console.log(useParams());

  return (
    <div>
      <NavBar />
      This is the Profile page for user with id of {userId}
      <hr />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go to home
      </button>
    </div>
  );
}

export default Profile;
