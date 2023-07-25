import * as React from 'react';
import { Link as RoutePath } from 'react-router-dom';
import { Link, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  const [selection, setSelection] = React.useState('posts');

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
        <ToggleButton value="about-me" aria-label="about-me" component={RoutePath} to="about">
            About Me
        </ToggleButton>
        <ToggleButton value="posts" aria-label="posts" component={RoutePath} to="feed">
            Posts
        </ToggleButton>
        <ToggleButton value="message-board" aria-label="message-board" component={RoutePath} to="message-board">
            Message Board
        </ToggleButton>
        <ToggleButton value="news" aria-label="news" component={RoutePath} to="news">
            News
        </ToggleButton>
        <ToggleButton value="products-support" aria-label="products-support" component={RoutePath} to="shop">
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
