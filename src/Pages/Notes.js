import React from "react";
import { useParams } from "react-router-dom";

function Notes() {
  //   let { note_id } = useParams();
  console.log(useParams());
  return (
    <div>
      {" "}
      this here is ALL the notes for the user with an note id of
      {/* {noteId} */}
    </div>
  );
}

export default Notes;
