import * as React from "react";
import Stack from "@mui/material/Stack";
import "./Footer.css";

export default function Footer() {
  return (
    // Site footer
    <footer class="site-footer">
      <Stack direction="row" spacing={1}>
        <p class="text-justify">
          <h6>About</h6>
          <i>Travel Notes</i> is an initiative to help knowledge seekers and
          travellers get atleast an introduction to a country searched.
          TravelNotes focuses on providing a compilation of information
          necessary to decide your next travel destination.
        <p class="copyright-text">
          Copyright &copy; 2022 All Rights Reserved by
          <a href="/">TravelNotes</a>.
        </p>
        </p>
        <ul class="footer-links">
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
