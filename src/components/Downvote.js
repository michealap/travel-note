import React from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { supabase } from "../client";
import { useState } from "react";

function Downvote(props) {
  const [downvotesCount, setDownvotesCount] = useState(props.downvoteCount);

  async function fetchNotesCount(noteId) {
    const { data, error } = await supabase
      .from("notes")
      .select("downvotes")
      .eq("id", noteId);

    return data[0].downvotes;
  }

  const downVote = async (noteId) => {
    let currentNotesCount = await fetchNotesCount(noteId);

    // console.log("noteId:", noteId);
    let updatedNotesCount = parseInt(currentNotesCount) - 1;
    // console.log("currentNotesCount:", currentNotesCount);
    // console.log("updatedNotesCount:", updatedNotesCount);

    const { data, error } = await supabase
      .from("notes")
      .update({ downvotes: `${updatedNotesCount}` })
      .match({ id: `${noteId}` });

    setDownvotesCount(updatedNotesCount);
  };

  console.log("props.downvoteCount:", props.downvoteCount);
  return (
    <div>
      {downvotesCount}
      <button
        onClick={() => {
          downVote(props.downvoteId);
        }}
      >
        <ArrowCircleDownIcon />{" "}
      </button>
    </div>
  );
}

export default Downvote;
