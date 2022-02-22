import React from "react";
import Upvote from "./Upvote";
import Downvote from "./Downvote";
import { useState } from "react";
import Stack from "@mui/material/Stack";
// Material UI icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


export default function SingleNote(props) {
  const { note, user, deleteNote } = props;
  const [voteClicked, setVoteClicked] = useState(false);
  const handleVoteClicked = () => {
    setVoteClicked(true);
    console.log("voted clicked called and set to", voteClicked);
  };

  return (
    <div className="note" key={note.id}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <Stack direction="row" spacing={1}>
      {user && (
        <>
          <Upvote
            upvoteCount={note.upvotes}
            upvoteId={note.id}
            handleClick={handleVoteClicked}
            voteClicked={voteClicked}
          />
          <Downvote
            downvoteCount={note.downvotes}
            downvoteId={note.id}
            handleClick={handleVoteClicked}
            voteClicked={voteClicked}
          ></Downvote>{" "}
          {user.id === note.user_id && (
          <button onClick={() => deleteNote(note.id)}>
            <DeleteOutlineIcon />
          </button>
          )}
        </>
      )}
      </Stack>
    </div>
  );
}
