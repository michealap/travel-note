import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { supabase } from "../client";
import { useState } from "react";

function Upvote(props) {
  const [upvotesCount, setUpvotesCount] = useState(props.upvoteCount);

  async function fetchNotesCount(noteId) {
    const { data, error } = await supabase
      .from("notes")
      .select("upvotes")
      .eq("id", noteId);

    return data[0].upvotes;
  }

  const upVote = async (noteId) => {
    let currentNotesCount = await fetchNotesCount(noteId);

    // console.log("noteId:", noteId);
    let updatedNotesCount = parseInt(currentNotesCount) + 1;
    // console.log("currentNotesCount:", currentNotesCount);
    // console.log("updatedNotesCount:", updatedNotesCount);

    const { data, error } = await supabase
      .from("notes")
      .update({ upvotes: `${updatedNotesCount}` })
      .match({ id: `${noteId}` });

    setUpvotesCount(updatedNotesCount);
  };

  console.log("hey", props.upvoteCount);
  return (
    <div>
      {upvotesCount}
      <button
        onClick={() => {
          upVote(props.upvoteId);
        }}
      >
        <ArrowCircleUpIcon />
      </button>
    </div>
  );
}

export default Upvote;
