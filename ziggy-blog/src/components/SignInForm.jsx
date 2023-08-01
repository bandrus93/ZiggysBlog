import { Button, Link, TextField } from "@mui/material";

export default function SignInForm() {
    return (
        <div>
            <Link
            component="button"
            variant="body2"
            aria-label="sign-in"
            onClick={() => {
                console.info("Redirect to sign-in page.");
            }}
            >
            {loggedInUser ? "Welcome " + user + "! | Sign Out" : "Sign In"}
            </Link>
            <form>
                <TextField id="name" label="Username or Email" variant="filled"/>
                <TextField id="password" label="Password" variant="filled"/>
                <Button variant="contained">Sign In</Button>
                <Button variant="outlined">Cancel</Button>
                <p>Don't have an account? <Link>Create one here!</Link></p>
            </form>
        </div>
    );
}
