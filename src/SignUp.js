import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Paper, TextField, Grid, Button } from '@material-ui/core'
import './SignUp.css'
import fire from './Fire'

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await fire
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/")
        } catch (error) {
            alert("error")
        }
    }, [history]);
    return (
        <div className="sign">
            <h2>Join Haikuu!</h2>
            <h1>Create your account</h1>
            <Grid container justify="flex-end" alignItems="center" direction="column">
                <Paper style={{ width: "20%", padding: "2rem" }}>
                    <form onSubmit={handleSignUp}>
                        <TextField name="email" id="outlined-basic" label="Username" variant="outlined" fullWidth required />
                        <TextField name="password" id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" fullWidth required />
                        <Button type="submit" variant="contained" color="primary" style={{ margin: "1rem" }} >Sign Up</Button>
                    </form>
                    <Link to="/login" style={{ textDecoration: 'none' }} >Already have an account?</Link>
                    <p >*Please note that all user information will be leaked to third party companies </p>
                </Paper>
            </Grid>
        </div>
    )
}

export default withRouter(SignUp)