import React from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { supabase } from "../client";
import { useState } from "react";
import { useAuth } from "../providers/Auth";

function Downvote(props) {
  let [disabledIcon, setDisabledIcon] = useState(false);
  const { user } = useAuth();

  const [downvotesCount, setDownvotesCount] = useState(props.downvoteCount);

  async function fetchNotesCount(noteId) {
    const { data, error } = await supabase
      .from("notes")
      .select("downvotes")
      .eq("id", noteId);

    return data[0].downvotes;
  }

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
    setDisabledIcon(true);
    let downvotedIsTrue = await checkIfDownvoted(user, noteId);
    console.log("DownvotedIsTrue:", downvotedIsTrue);
    if (downvotedIsTrue) {
      return;
    }

    let currentNotesCount = await fetchNotesCount(noteId);
    const { data1, error1 } = await supabase.from("activities").insert([
      {
        downvoted_by: `${user.id}`,
        note_id: `${noteId}`,
      },
    ]);
    console.log("check if downvoted", checkIfDownvoted(user, noteId));

    // console.log("noteId:", noteId);
    let updatedNotesCount = parseInt(currentNotesCount) + 1;
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
      {!disabledIcon && (
        <button
          onClick={() => {
            downVote(props.downvoteId);
          }}
        >
          <ArrowCircleDownIcon />{" "}
        </button>
      )}
      {disabledIcon && (
        <button
          onClick={() => {
            downVote(props.downvoteId);
          }}
          style={{ color: "red" }}
        >
          <ArrowCircleDownIcon />{" "}
        </button>
      )}
    </div>
  );
}

export default Downvote;
