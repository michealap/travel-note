import React, { useState, useEffect } from "react";
import { supabase } from "../client";
function Note() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: "",
    upvotes: 1,
    downvotes: 1,
  });
  const { title, content } = note;
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
  if (loading) return <div>....Loading</div>;

  async function createNote() {
    await supabase.from("notes").insert([{ title, content }]).single();
    setNotes({ title: "", content: "" });
    fetchNotes();
  }

  return (
    <div className="App">
      <head>
        <title>TravelNote</title>
      </head>
      <form onSubmit={(event) => event.preventDefault()} autoComplete="off">
        <input
          placeholder="Title"
          value={title}
          //set the title value as user types
          onChange={(event) => setNote({ ...note, title: event.target.value })}
        />

        <input
          placeholder="Content"
          value={content}
          //set the title value as user types
          onChange={(event) =>
            setNote({ ...note, content: event.target.value })
          }
        />
      </form>
      <button onClick={createNote}>Add Note</button>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p>--------------------------</p>
        </div>
      ))}
    </div>
  );
}
export default Note;
