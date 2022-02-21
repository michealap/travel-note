import React from "react";
import Stack from "@mui/material/Stack";
import "./About.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ErrorPage() {
  return (
    <Stack pt={10} pl={5}>
      Oops! You made a wrong turn. Since you're here ...
      <ul class="social-icons">
      Want to collaborate? Contact us
        <li>
          Micheala
          <a className="linkedin" href="https://www.linkedin.com/in/micheala-palmer/">
            <LinkedInIcon style={{fontSize: 30}}/>
          </a>
        </li>
        <li>
          Noya
          <a className="linkedin" href="https://www.linkedin.com/in/noya-o/">
            <LinkedInIcon style={{fontSize: 30}} />
          </a>
        </li>
        <li>
          Matthew
          <a className="linkedin" href="https://www.linkedin.com/in/matthewwoods1991/">
            <LinkedInIcon style={{fontSize: 30}}/>
          </a>
        </li>
      </ul>
    </Stack>
  );
}

export default ErrorPage;
