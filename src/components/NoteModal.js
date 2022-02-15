import * as React from 'react';
import { useState } from 'react';
import { supabase } from "../client";
import fetchNotes from './Note';
import "./NoteModal.css";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  justifyContent: 'center',
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
    upvotes: 1,
    downvotes: 1,
  });

  const { title, content } = note;

  async function createNote() {
    try {
      await supabase
        .from("notes")
        .insert([{ title, content }])
        // returns one row
        .single();
      // clearing the input field
      setNote({ title: "", content: "" });
      fetchNotes();
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <Button id="note-modal" onClick={handleOpen}><BorderColorIcon /></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            <div id='grid'>
            <textarea id="item1"
              placeholder="Title"
              value={title}
              //set the title value as user types
              onChange={(event) => setNote({ ...note, title: event.target.value })}
            />
    
            <textarea id='item2'
              placeholder="Content"
              value={content}
              //set the title value as user types
              onChange={(event) =>
                setNote({ ...note, content: event.target.value })
              }
            />
            <button id='item3' onClick={createNote}><AddOutlinedIcon /></button>
            </div>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}