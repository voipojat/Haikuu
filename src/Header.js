import React, { useContext } from 'react'
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'
import fire from './Fire'

function Header() {
    const { currentUser } = useContext(AuthContext)
    return (
        <div style={{ display: "flex", flexGrow: 1 }} >
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={{ textDecoration: "none", color: "white", flexGrow: 1, marginRight: "0.5rem" }} edge="start" >Home</Link>
                    {currentUser !== null ?
                        <>
                            <Link id="boi2" to="/storyfield" style={{ textDecoration: "none", color: "white", margin: "0 1rem", flexShrink: 0 }} >Write a new haiku!</Link>
                            <Typography id="boi" style={{ margin: "0 1rem" }}>{currentUser.email}</Typography>
                            <Button onClick={() => fire.auth().signOut()} variant="contained" style={{ backgroundColor: "rgb(104,114,165)", color: "white", flexShrink: 0, marginRight: "0.5rem" }}>Sign Out</Button>
                        </>
                        :
                        <>
                            <Typography ></Typography>
                            <Link to="/login" style={{ textDecoration: "none", color: "white", marginRight: "0.5rem", backgroundColor: "rgb(104,114,165)", padding: "0.5rem", borderRadius: "15px", fontWeight: "bold" }}>Log In</Link>
                            <Link to="/signup" style={{ textDecoration: "none", color: "white", backgroundColor: "rgb(104,114,165)", padding: "0.5rem", borderRadius: "15px" }}>Sign Up</Link>
                        </>}
                </Toolbar>
            </AppBar>
        </div >
    )
}

export default Header