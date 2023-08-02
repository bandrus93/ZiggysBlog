import * as React from 'react';
import '../App.css';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Link, Popover, TextField } from "@mui/material";
import { useAppState }  from '../contexts/AppStateContext';
import styled from '@emotion/styled';

export default function SignInForm({ updateUser }) {
    const { state } = useAppState();
    const [user, setUser] = React.useState();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [createAccount, setCreateAccount] = React.useState(false);

    const open = Boolean(anchorEl);

    const FormItemList = styled.ul('list-style-type: none;');
    const FormItem = styled.li('margin: 0.5rem;');

    const handleTopLevelClick = (event) => {
        if (state.user) {
            updateUser(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    }

    const handleCreateAccount = () => {
        setCreateAccount(true);
    }

    const closeDialog = () => {
        setCreateAccount(false);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <Link
            component="button"
            variant="body2"
            aria-label="sign-in"
            onClick={handleTopLevelClick}
            >
            {state.user ? "Welcome " + state.user + "! | Sign Out" : "Sign In"}
            </Link>
            <Popover className="form-element" sx={{ padding: '0.5rem 1rem' }} anchorEl={anchorEl} open={open} onClose={handleClose}>
                <FormItemList>
                    <FormItem><h4>Sign In to Your Account:</h4></FormItem>
                    <FormItem><TextField id="name" label="Username or Email" variant="filled"/></FormItem>
                    <FormItem><TextField id="password" label="Password" variant="filled"/></FormItem>
                    <FormItem><Button variant="contained" sx={{ margin: '0.5rem 0.75rem' }}>Sign In</Button><Button variant="outlined" onClick={handleClose} sx={{ margin: '0.5rem 0.75rem' }}>Cancel</Button></FormItem>
                    <FormItem><p>Don't have an account? <Link onClick={handleCreateAccount}>Create one here!</Link></p></FormItem>
                </FormItemList>
            </Popover>
            <Dialog open={createAccount} onClose={closeDialog}>
                <DialogTitle>Create Account</DialogTitle>
                <DialogContent>
                    <FormItemList>
                        <FormItem><TextField id='username' label="Username" variant='filled' /></FormItem>
                        <FormItem><TextField id='email' label="Email" variant='filled' /></FormItem>
                        <FormItem><TextField id='pword' label="Password" variant='filled' /></FormItem>
                        <FormItem><TextField id='pword-verify' label="Re-enter Password" variant='filled' /></FormItem>
                    </FormItemList>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained'>Create Account</Button>
                    <Button variant='outlined' onClick={closeDialog}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
