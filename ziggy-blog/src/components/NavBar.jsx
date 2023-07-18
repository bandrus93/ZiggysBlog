import * as React from 'react';
import { Link, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  const [selection, setSelection] = React.useState('about-me');

  const handleSelection = (event, newSelection) => {
    setSelection(newSelection);
  };

  return (
    <div className='navbar-container'>
        <Button>
            <MenuIcon />
        </Button>
        <ToggleButtonGroup
            value={selection}
            exclusive
            onChange={handleSelection}
            aria-label="navbar"
        >
        <ToggleButton value="about-me" aria-label="about-me">
            About Me
        </ToggleButton>
        <ToggleButton value="posts" aria-label="posts">
            Posts
        </ToggleButton>
        <ToggleButton value="message-board" aria-label="message-board">
            Message Board
        </ToggleButton>
        <ToggleButton value="news" aria-label="news">
            News
        </ToggleButton>
        <ToggleButton value="products-support" aria-label="products-support">
            Products/Support
        </ToggleButton>
        </ToggleButtonGroup>
        <Link
            component="button"
            variant="body2"
            aria-label="sign-in"
            onClick={() => {
                console.info("Redirect to sign-in page.");
            }}
        >
        Sign In
        </Link>
    </div>
  );
}
