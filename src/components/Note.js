import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import "./Note.css";
// Material UI icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import CircularProgress from "@mui/material/CircularProgress";
import { useAuth } from "../providers/Auth";
import Upvote from "../components/Upvote";
import Downvote from "../components/Downvote";

export default function Note() {
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  // const [upvotesCount, setUpvotesCount] = useState(note.upvote);
  // const [downvotesCount, setDownvotesCount] = useState(note.downvote);
  const [downvotesCount, setDownvotesCount] = useState(0);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const { data } = await supabase.from("notes").select();
    setNotes(data);
    setLoading(false);
    console.log("data: ", data);
  }

  // If Loading
  if (loading) {
    return (
      <div>
        <CircularProgress color="success" />
      </div>
    );
  }

  const deleteNote = async (noteId) => {
    try {
      await supabase.from("notes").delete().eq("id", noteId);
      setNotes(notes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.log("error", error);
    }
  };

  async function fetchNotesCount(noteId) {
    const { data, error } = await supabase
      .from("notes")
      .select("upvotes")
      .eq("id", noteId);

    return data[0].upvotes;
  }

  // const upVote = async (noteId) => {
  //   let currentNotesCount = await fetchNotesCount(noteId);

  //   // console.log("noteId:", noteId);
  //   let updatedNotesCount = parseInt(currentNotesCount) + 1;
  //   // console.log("currentNotesCount:", currentNotesCount);
  //   // console.log("updatedNotesCount:", updatedNotesCount);

  //   const { data, error } = await supabase
  //     .from("notes")
  //     .update({ upvotes: `${updatedNotesCount}` })
  //     .match({ id: `${noteId}` });

  //   setUpvotesCount(updatedNotesCount);
  // };

  return (
    <div className="App">
      <div className="allNotes">
        {notes &&
          notes.map((note) => (
            <div className="note" key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              {user && (
                <>
                  <Upvote upvoteCount={note.upvotes} upvoteId={note.id} />
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
          ))}
      </div>
    </div>
  );
}
