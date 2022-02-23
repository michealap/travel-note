import { useAuth } from "../../providers/Auth";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NavBar from "../../components/NavBar";
import React, { useState, useEffect } from "react";
import { supabase } from "../../client";
import Upvote from "../../components/Upvote";
import Downvote from "../../components/Downvote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CircularProgress from "@mui/material/CircularProgress";

export function Dashboard() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchNotesForUser(user.id);
    checkIfVoted(user.id);
  }, []);

  // Get current user and signOut function from context
  let firstName = user.user_metadata.first_name;
  // let lastName = user.user_metadata.last_name;
  // let name = firstName + " " + lastName;
  // console.log("user.id:", user.id);
  async function fetchNotesForUser(userId) {
    const { data } = await supabase
      .from("notes")
      .select()
      .match({ created_by: user.id });
    setNotes(data);
    setLoading(false);
    if (loading) {
      return (
        <div>
          <CircularProgress color="success" />
        </div>
      );
    }
  }
  const deleteNote = async (noteId) => {
    try {
      await supabase.from("notes").delete().eq("id", noteId);
      setNotes(notes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.log("error", error);
    }
  };

  async function checkIfVoted(userId, noteId) {
    const { data } = await supabase.from("activities").select(`
      upvoted_by,
      user: id ( id ),
      note: id ( id ),
    `);
    setActivities(data);
    console.log("data incheckIfVoted: ", data);
  }

  return (
    <div>
      <NavBar />{" "}
      <Typography variant="h5" pl={10} pt={10} pb={5}>
        Welcome, {firstName}!{/* {user?.id} */}
      </Typography>
      <hr className="hr-text" data-content="Your Contributions" />
      <Typography component="div" pb={10} className="allNotes">
        {notes &&
          notes.map((note) => (
            <div className="note" key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              {user && (
                <>
                  <Stack direction="row" spacing={2}>
                    <Upvote upvoteCount={note.upvotes} upvoteId={note.id} />
                    <Downvote
                      downvoteCount={note.downvotes}
                      downvoteId={note.id}
                    ></Downvote>{" "}
                    <button onClick={() => deleteNote(note.id)}>
                      <DeleteOutlineIcon />
                    </button>
                  </Stack>
                </>
              )}
            </div>
          ))}
      </Typography>
      <hr className="hr-text" data-content="Recent Activity Stats" />
      {user && (
        <>
          <Stack direction="column" spacing={2} textAlign="center">
            Searches: 7
            Upvotes: 3
            {/* total upvotes by user */}
            Downvotes: 1
            {/* total downvotes by user */}
          </Stack>
        </>
      )}
    </div>
  );
}
