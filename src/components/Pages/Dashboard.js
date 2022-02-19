import { useNavigate } from "react-router";
import { useAuth } from "../../providers/Auth";
import Typography from "@mui/material/Typography";

export function Dashboard() {
  // Get current user and signOut function from context
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  async function handleSignOut() {
    // Ends user session
    await signOut();

    // Redirects the user to Login page
    navigate("/login");
  }

  return (
    <div>
      {/* Change it to display the user ID too 👇*/}
      <Typography variant="h5" pt={10}>Welcome, {user?.id}!</Typography>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
