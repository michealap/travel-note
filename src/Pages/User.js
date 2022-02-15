import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function User() {
  let navigate = useNavigate();
  let { userId } = useParams();
  console.log(useParams());

  return (
    <div>
      This is the profile page for user with id of {userId}
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

export default User;
