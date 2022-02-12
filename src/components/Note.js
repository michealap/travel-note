import React, { useState, useEffect } from "react";
import { supabase } from "../client";

export default function Note() {
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
  if (loading) {
    return <div>....Loading</div>;
  }

  
  async function createNote() {
    try {
    await supabase.from("notes")
    .insert([{ title, content }])
    // returns one row
    .single();
    // clearing the input field
    setNote({ title: "", content: "" });
    fetchNotes();
    } catch (error) {
      console.log('error', error);
    }
  }
  
  const deleteNote = async (noteId) => {
    try {
      await supabase.from('notes').delete().eq('id', noteId);
      setNotes(notes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <div className="App">
        <input
          placeholder="Title"
          value={title}
          //set the title value as user types
          onChange={event => setNote({ ...note, title: event.target.value })}
        />

        <input
          placeholder="Content"
          value={content}
          //set the title value as user types
          onChange={event =>
            setNote({ ...note, content: event.target.value })
          }
        />
      <button onClick={createNote}>Add Note</button>
      
      {notes && notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
          <p>--------------------------</p>
        </div>
      ))}
    </div>
  );
}
