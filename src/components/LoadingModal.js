import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  justifyContent: "center",
};


export default function LoadingModal() {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Modal
      aria-labelledby="transition-modal-"
      aria-describedby="transition"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box pl={4} sx={style}>
        <iframe src="https://giphy.com/embed/aZg5FJVAHdB3G" width="100%" height="100%" frameBorder="0" className="giphy-embed" title="travel" allowFullScreen></iframe>
        </Box>
      </Fade>
    </Modal>
  );
}
