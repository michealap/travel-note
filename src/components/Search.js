import { useState } from "react";
import "./Search.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";

export default function Search(props) {
  const { loading } = props;
  const [userInput, setUserInput] = useState("");
  const [alert, setAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setAlert(false);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  if (alert) {
    return (
      <div id="alert">
        <Modal
          sx={{ width: "100%", height: "30%" }}
          open={open}
          onClose={handleClose}
        >
          <Alert severity="warning" sx={{ justifyContent: "center" }}>
            Please enter a country name
          </Alert>
        </Modal>
      </div>
    );
  }

  function onSearch() {
    if (userInput === "") {
      console.log("please enter a country");
      setAlert(true);
      handleOpen();
    } else {
      props.search(userInput);
      setUserInput("");
    }
  }

  return (
    <Box className="logoandsearch">
      <Stack
        direction="row"
        spacing={20}
        pl={50}
        sx={{ justifyContent: "space-evenly", width: "100%" }}
      >
        <div className="logo"></div>
        <div className="searchbar">
          <div id="search">
            <input
              id="clear"
              placeholder={props.placeholder}
              value={userInput}
              onChange={handleChange}
              // onSubmit={() => onSearch()}
            />
            {loading === true ? (
              <CircularProgress color="success" style={{ padding: "10px" }} />
            ) : (
              <button type="button" onClick={() => onSearch()}>
                )
                <SearchIcon id="button" />
              </button>
            )}
          </div>
        </div>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Ruda",
            lineHeight: "200%",
            width: "100%",
            pr: "10%",
            color: "gray",
          }}
        >
          <i>
            <b>Instant access</b> to possible{" "}
            <b>
              places to see, weather, information about the country, community
              travel notes, travel videos
            </b>{" "}
            and more.
          </i>
        </Typography>
      </Stack>
    </Box>
  );
}
