import React, { useContext, useCallback } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { Paper, TextField, Grid, Button } from '@material-ui/core'
import fire from './Fire'
import { AuthContext } from './context/Auth'

const Login = ({ history }) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await fire
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push("/")
        } catch (error) {
            alert("error")
        }
    }, [history]);
    const { currentUser } = useContext(AuthContext)
    if (currentUser) {
        return <Redirect to="/" />
    }
    return (
        <div className="App">
            <h1 >Log In</h1>
            <Grid container justify="flex-end" alignItems="center" direction="column">
                <Paper style={{ maxWidth: 300, padding: "2rem" }}>
                    <form onSubmit={handleLogin}>
                        <TextField name="email" id="outlined-basic" label="Username" variant="outlined" fullWidth />
                        <TextField name="password" id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" fullWidth />
                        <Button type="submit" variant="contained" color="primary" style={{ margin: "1rem" }} >Login</Button>
                    </form>
                    <Link to="/signup" style={{ textDecoration: 'none' }} >Don't have an account?</Link>
                </Paper>
            </Grid>
        </div>
    )
}

export default withRouter(Login)