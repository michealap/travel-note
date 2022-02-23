import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import SingleNote from "../components/SingleNote";
import "./Note.css";

import CircularProgress from "@mui/material/CircularProgress";
import { useAuth } from "../providers/Auth";

export default function Note() {
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const { data } = await supabase.from("notes").select();
    setNotes(data);
    setLoading(false);
  }

  // If Loading
  if (loading) {
    return (
      <div>
        <CircularProgress color="success" />
      </div>
    );
  }
  // async function checkIfVoted(userId, noteId) {
  //   const { data, error } = await supabase.from("activities").select(`
  //     upvoted_by,
  //     user: id ( id ),
  //     note: id ( id )
  //   `);

  //   console.log("data incheckIfVoted: ", data);
  // }

  const deleteNote = async (noteId) => {
    try {
      await supabase.from("notes").delete().eq("id", noteId);
      setNotes(notes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          width: "44%",
          ml: "28%",
          mr: "28%",
          flexGrow: 1,
          justifyContent: "center",
          border: (theme) => `6px solid ${theme.palette.divider}`,
          p: "5px",
          borderRadius: 1,
          color: "text.white",
          fontSize: "20px",
          "& svg": {
            m: 2,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Button>
          <Link to="/signup" id="links">
            {" "}
            <Typography variant="h5" color="gray" fontFamily="Ruda">
              Join our travel community and share your experience
            </Typography>{" "}
          </Link>
        </Button>
      </Box>
      <div className="allNotes">
        {notes &&
          notes.map((note) => {
            return (
              <SingleNote note={note} user={user} deleteNote={deleteNote} key={note.id}/>
            );
          })}
      </div>
    </div>
  );
}
