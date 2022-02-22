import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { supabase } from "../client";
import { useState } from "react";
import { useAuth } from "../providers/Auth";

function Upvote(props) {
  // console.log("here", props.handleClick);
  // console.log("here props.voteClicked", props.voteClicked);

  // let [disabledIcon, setDisabledIcon] = useState(props.voteClicked);
  const { user } = useAuth();

  const [upvotesCount, setUpvotesCount] = useState(props.upvoteCount);

  async function fetchNotesCount(noteId) {
    const { data, error } = await supabase
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
    // setDisabledIcon(true);

    let upvotedIsTrue = await checkIfUpvoted(user, noteId);
    let downvotedIsTrue = await checkIfDownvoted(user, noteId);

    // console.log("user: ", user);
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
    // console.log("data1:", data1);
    // console.log("error1:", error1);
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

  // console.log("props.upvoteCount: ", props.upvoteCount);
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
