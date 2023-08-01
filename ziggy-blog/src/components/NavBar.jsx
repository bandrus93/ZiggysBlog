import * as React from 'react';
import { Link as RoutePath } from 'react-router-dom';
import { Link, ToggleButton, ToggleButtonGroup } from '@mui/material';
import NavbarMenu from './NavbarMenu';
import UserContext  from '../contexts/UserContext';

export default function NavBar() {
  const [selection, setSelection] = React.useState('posts');
  const user = React.useContext(UserContext);
  const loggedInUser = Boolean(user);

  const handleSelection = (event, newSelection) => {
    setSelection(newSelection);
  };

  return (
    <div className='navbar-container'>
        <NavbarMenu></NavbarMenu>
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
        
    </div>
  );
}
