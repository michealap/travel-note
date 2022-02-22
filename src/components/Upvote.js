import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { supabase } from "../client";
import { useState } from "react";
import { useAuth } from "../providers/Auth";

function Upvote(props) {
  const { user } = useAuth();

  const [upvotesCount, setUpvotesCount] = useState(props.upvoteCount);

  async function fetchNotesCount(noteId) {
    const { data, error } = await supabase
      .from("notes")
      .select("upvotes")
      .eq("id", noteId);

    return data[0].upvotes;
  }

  // const checkIfUpvoted = function (noteId) {
  //   console.log("user.id:", user.id);
  //   console.log("noteId:", noteId);

  //   let userHasUpvoted = supabase
  //     .from("activities")
  //     .select()
  //     .match({ upvoted_by: `${user.id}`, note_id: `${noteId}` }).data;

  //   console.log("userHasUpvoted:", userHasUpvoted);
  //   return userHasUpvoted;
  //   // let userHasDownvoted =
  // };

  const upVote = async (noteId) => {
    let currentNotesCount = await fetchNotesCount(noteId);

    const { data1, error1 } = await supabase
      .from("activities")
      .update([{ upvoted_by: `${user.id}`, note_id: `${noteId}` }]);

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

  console.log("props.upvoteCount: ", props.upvoteCount);
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
