import { Typography } from "@mui/material";
import NavBar from "../components/NavBar";

export default function About() {
    return (
        <div className="about-blurb">
            <img src="" alt="It's Ziggy, B*tch" className="about-image"></img>
            <Typography variant="body2" className="about-text">
                This section is all about Ziggy. Her hobbies, interests, activism...
            </Typography>
        </div>
    );
}