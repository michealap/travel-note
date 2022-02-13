import React, { useState, useEffect } from "react";
import { supabase } from "../client";
import "./Note.css";
// Material UI icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function Note() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

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
    return <div>....Loading</div>;
  }

  const deleteNote = async (noteId) => {
    try {
      await supabase.from("notes").delete().eq("id", noteId);
      setNotes(notes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
  <body>
    <div className="App">
        <div className="allNotes">
          {notes &&
            notes.map((note) => (
              <div className="note" key={note.id}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                    <button><ArrowCircleUpIcon /></button>
                    <button><ArrowCircleDownIcon /></button>
                    <button onClick={() => deleteNote(note.id)}><DeleteOutlineIcon />
                  </button>
              </div>
            ))}
        </div>
    </div>
  </body>
  );
}
