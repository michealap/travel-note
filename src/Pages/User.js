import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function User() {
  let navigate = useNavigate();
  let { id } = useParams();
  return (
    <div>
      This is the profile page for user with id of {id}
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
