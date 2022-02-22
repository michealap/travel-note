import React from "react";
import Upvote from "./Upvote";
import Downvote from "./Downvote";
import { useState } from "react";
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
      {user && (
        <>
          <Upvote
            upvoteCount={note.upvotes}
            upvoteId={note.id}
            handleClick={handleVoteClicked}
            voteClicked={voteClicked}
          />
          {/* <button
          onClick={() => {
            upVote(note.id);
          }}
        >
          <ArrowCircleUpIcon />
        </button> */}
          <Downvote
            downvoteCount={note.downvotes}
            downvoteId={note.id}
            handleClick={handleVoteClicked}
            voteClicked={voteClicked}
          ></Downvote>{" "}
          {/* <button
          onClick={() => {
            downVote(note.id);
          }}
        >
          <ArrowCircleDownIcon />
        </button> */}
          <button onClick={() => deleteNote(note.id)}>
            <DeleteOutlineIcon />
          </button>
        </>
      )}
    </div>
  );
}
