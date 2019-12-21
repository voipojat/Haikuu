import React, { useContext } from 'react'
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'
import fire from './Fire'

function Header() {
    const { currentUser } = useContext(AuthContext)
    return (
        <AppBar position="static"  >
            <Toolbar >
                <Link to="/" style={{ textDecoration: "none", color: "white", margin: "0 1rem" }}>Home</Link>
                {currentUser !== null ? <Typography style={{ margin: "0 1rem" }}>Logged in as {currentUser.email}</Typography> : null}
                {currentUser !== null ? <Button onClick={() => fire.auth().signOut()} variant="contained" style={{ margin: "0 1rem" }}>Sign Out</Button> : null}
                {currentUser !== null ? <Link to="/storyfield" style={{ textDecoration: "none", color: "white", margin: "0 1rem" }}>Write a new haiku!</Link> : null}
            </Toolbar>
        </AppBar>
    )
}

export default Header