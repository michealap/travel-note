import { useNavigate } from "react-router";
import { useAuth } from "../../providers/Auth";
import Typography from "@mui/material/Typography";
import NavBar from "../../components/NavBar";
import React, { useState, useEffect } from "react";
import { supabase } from "../../client";
import Upvote from "../../components/Upvote";
import Downvote from "../../components/Downvote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export function Dashboard() {
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotesForUser(user.id);
  }, []);

  // Get current user and signOut function from context
  let firstName = user.user_metadata.first_name;
  let lastName = user.user_metadata.last_name;
  let name = firstName + " " + lastName;
  const navigate = useNavigate();
  // console.log("user.id:", user.id);
  async function fetchNotesForUser(userId) {
    const { data } = await supabase
      .from("notes")
      .select()
      .match({ created_by: user.id });
    setNotes(data);
    setLoading(false);
    // console.log("data: ", data);
  }
  const deleteNote = async (noteId) => {
    try {
      await supabase.from("notes").delete().eq("id", noteId);
      setNotes(notes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.log("error", error);
    }
  };

  async function handleSignOut() {
    // Ends user session
    await signOut();

    // Redirects the user to Login page
    navigate("/login");
  }

  // console.log(user.user_metadata.first_name);

  return (
    <div>
      <NavBar />{" "}
      <Typography variant="h5" pt={10}>
        Welcome, {firstName}!{/* {user?.id} */}
      </Typography>
      <div className="allNotes">
        {notes &&
          notes.map((note) => (
            <div className="note" key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              {user && (
                <>
                  <Upvote upvoteCount={note.upvotes} upvoteId={note.id} />
                  <Downvote
                    downvoteCount={note.downvotes}
                    downvoteId={note.id}
                  ></Downvote>{" "}
                  <button onClick={() => deleteNote(note.id)}>
                    <DeleteOutlineIcon />
                  </button>
                </>
              )}
            </div>
          ))}
      </div>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
