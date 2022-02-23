import { useAuth } from "../../providers/Auth";
import NavBar from "../../components/NavBar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import Upvote from "../../components/Upvote";
import Downvote from "../../components/Downvote";
// Material UI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import "./Dashboard.css";

import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from "@devexpress/dx-react-chart-material-ui";

export function Dashboard() {
  const data = [
    { argument: "Searches", value: 7 },
    { argument: "Upvotes", value: 3 },
    { argument: "Downvotes", value: 1 },
  ];
  

  const { user } = useAuth();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [notes, setNotes] = useState([]);
  // const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchNotesForUser(user.id);
    checkIfVoted(user.id);
  }, []);

  // Get current user and signOut function from context
  let firstName = user.user_metadata.first_name;
  let lastName = user.user_metadata.last_name;
  let name = firstName + " " + lastName;
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
    // setActivities(data);
    console.log("data incheckIfVoted: ", data);
  }

  return (
    <div>
      <NavBar />{" "}
      <section className="container">
        <div className="left">
          <Typography variant="h4" pl={10} pt={5}>
            Welcome, {firstName}!{/* {user?.id} */}
          </Typography>
          <Typography variant="h5" fontFamily="Ruda" pl={10} pt={3}>
            <img
              className="profile"
              src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="profilepic"
            />
            <br></br>
            {name}
            <div>Adventure seeker, here for a good time</div>
          </Typography>
          <Box sx={{ width: "100%", mt: 50 }}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              >
              <BottomNavigationAction label="Edit" icon={<EditIcon />} />
              <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
              <BottomNavigationAction
                label="Favorites"
                icon={<FavoriteIcon />}
                />
              <BottomNavigationAction
                label="Nearby"
                icon={<LocationOnIcon />}
                />
              <BottomNavigationAction
                label="Home"
                icon={<HomeIcon />}
                onClick={() => {
                  navigate("/");
                }}
                />
            </BottomNavigation>
          </Box>
                </div>
        <div className="right">
          <Grid container spacing={4} p={2} pl={5} pr={5}>
            <Grid item xs={12}>
              <hr className="text" data-content="Your Contributions" />
              <Stack direction="row">
              {notes &&
                notes.map((note) => (
                  <div className="note" key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    {user && (
                      <>
                        <Stack direction="row" spacing={2}>
                          <Upvote
                            upvoteCount={note.upvotes}
                            upvoteId={note.id}
                          />
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
                </Stack>
            </Grid>
            <Grid item xs={12}>
              {user && (
                <>
                  <hr
                    className="text"
                    data-content="Recent Activity Stats"
                  />
                  <Chart data={data} fullWidth >
                    <ArgumentAxis />
                    <ValueAxis />
                    <BarSeries valueField="value" argumentField="argument" fill="#e4912c" />
                  </Chart>
                </>
              )}
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
}
