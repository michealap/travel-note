import * as React from "react";
import Stack from "@mui/material/Stack";
import "./Footer.css";

export default function Footer() {
  return (
    // Site footer
    <footer className="site-footer">
      <Stack direction="row" spacing={6} pl={8}>
        <div className="text-justify">
          <h6>About</h6>
          <i>Travel Notes</i> is an initiative to help knowledge seekers and
          travellers get atleast an introduction to a country searched.
          <i> Travel Notes</i> focuses on <br></br>providing a compilation of information
          necessary to decide your next travel destination.
        <p className="copyright-text">
          Copyright &copy; 2022 All Rights Reserved by
          <a href="/">TravelNotes</a>.
        </p>
        </div>
        <ul className="footer-links">
          <h6>Quick Links</h6>
          <li>
            <a href="about">The Team</a>
          </li>
          <li>
            <a href="*">Contact Us</a>
          </li>
          <li>
            <a href="signup">Join Us</a>
          </li>
        </ul>
      </Stack>
    </footer>
  );
}
