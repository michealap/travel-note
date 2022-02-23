import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { supabase } from "../client";
import { useState } from "react";
import { useAuth } from "../providers/Auth";

function Upvote(props) {
  const { user } = useAuth();

  const [upvotesCount, setUpvotesCount] = useState(props.upvoteCount);

  async function fetchNotesCount(noteId) {
    const { data } = await supabase
      .from("notes")
      .select("upvotes")
      .eq("id", noteId);

    return data[0].upvotes;
  }

  const checkIfUpvoted = async function (user, noteId) {
    console.log("user.id:", user.id);
    console.log("noteId:", noteId);

    const userUpvotedTheNote = await supabase
      .from("activities")
      .select()
      .match({ upvoted_by: `${user.id}`, note_id: `${noteId}` });

    console.log("userUpvotedTheNote:", userUpvotedTheNote.data[0]);
    if (userUpvotedTheNote.data[0]) {
      return true;
    }
    return false;
  };

  const checkIfDownvoted = async function (user, noteId) {
    console.log("user.id:", user.id);
    console.log("noteId:", noteId);

    const userDownvotedTheNote = await supabase
      .from("activities")
      .select()
      .match({ downvoted_by: `${user.id}`, note_id: `${noteId}` });

    console.log("userDownvotedTheNote:", userDownvotedTheNote.data[0]);
    if (userDownvotedTheNote.data[0]) {
      return true;
    }
    return false;
  };

  const upVote = async (noteId) => {
    let upvotedIsTrue = await checkIfUpvoted(user, noteId);
    let downvotedIsTrue = await checkIfDownvoted(user, noteId);

    console.log("upvotedIsTrue:", upvotedIsTrue);
    if (upvotedIsTrue || downvotedIsTrue) {
      return;
    }

    let currentNotesCount = await fetchNotesCount(noteId);

    const { data1, error1 } = await supabase.from("activities").insert([
      {
        upvoted_by: `${user.id}`,
        note_id: `${noteId}`,
      },
    ]);
    
    let updatedNotesCount = parseInt(currentNotesCount) + 1;

    const { data, error } = await supabase
      .from("notes")
      .update({ upvotes: `${updatedNotesCount}` })
      .match({ id: `${noteId}` });
    setUpvotesCount(updatedNotesCount);
  };

  return (
    <div>
      {upvotesCount}
      {!props.voteClicked && (
        <button
          onClick={() => {
            upVote(props.upvoteId);
            props.handleClick();
          }}
        >
          <ArrowCircleUpIcon />
        </button>
      )}
      {props.voteClicked && (
        <button style={{ color: "green" }} disabled>
          <ArrowCircleUpIcon />
        </button>
      )}
    </div>
  );
}

export default Upvote;
