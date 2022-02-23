import React from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { supabase } from "../client";
import { useState } from "react";
import { useAuth } from "../providers/Auth";

function Downvote(props) {
  const { user } = useAuth();

  const [downvotesCount, setDownvotesCount] = useState(props.downvoteCount);

  async function fetchNotesCount(noteId) {
    const { data } = await supabase
      .from("notes")
      .select("downvotes")
      .eq("id", noteId);

    return data[0].downvotes;
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

  const downVote = async (noteId) => {
    let upvotedIsTrue = await checkIfUpvoted(user, noteId);
    let downvotedIsTrue = await checkIfDownvoted(user, noteId);
    console.log("DownvotedIsTrue:", downvotedIsTrue);
    if (upvotedIsTrue || downvotedIsTrue) {
      return;
    }

    let currentNotesCount = await fetchNotesCount(noteId);
    const { data1 } = await supabase.from("activities").insert([
      {
        downvoted_by: `${user.id}`,
        note_id: `${noteId}`,
      },
    ]);

    let updatedNotesCount = parseInt(currentNotesCount) + 1;
    // console.log("currentNotesCount:", currentNotesCount);
    // console.log("updatedNotesCount:", updatedNotesCount);

    const { data } = await supabase
      .from("notes")
      .update({ downvotes: `${updatedNotesCount}` })
      .match({ id: `${noteId}` });

    setDownvotesCount(updatedNotesCount);
  };

  return (
    <div>
      {downvotesCount}
      {!props.voteClicked && (
        <button
          onClick={() => {
            downVote(props.downvoteId);
            props.handleClick();
          }}
        >
          <ArrowCircleDownIcon />{" "}
        </button>
      )}
      {props.voteClicked && (
        <button disabled style={{ color: "red" }}>
          <ArrowCircleDownIcon />{" "}
        </button>
      )}
    </div>
  );
}

export default Downvote;
