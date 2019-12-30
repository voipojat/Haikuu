import React, { useContext } from 'react'
import { Paper } from '@material-ui/core'
import { HaikuContext } from './context/HaikuList'
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from './context/Auth'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    paper: {
        maxWidth: 300,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

export default function Haiku({ title, text, user, score, id }) {
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    const { haikus, setHaiku } = useContext(HaikuContext)
    const handleHaiku = (id, a) => {
        //making sure that user can only have one vote for haiku
        const updatedHaikus = haikus.map(haiku => (
            haiku.id === id && haiku.userVote.includes(currentUser.email) !== true ? { ...haiku, score: haiku.score + a, userVote: [...haiku.userVote, currentUser.email] } : haiku)
        )
        updatedHaikus.sort((a, b) => b.score - a.score);
        setHaiku(updatedHaikus);
    }
    window.localStorage.setItem("haikus", JSON.stringify(haikus))

    return (
        <Paper className={classes.paper} style={{
            wordWrap: "break-word"
        }}>
            <Grid container wrap="nowrap" spacing={3}>
                <Grid item >
                    <div style={{ display: "flex", flexDirection: "column", fontSize: "2rem", backgroundColor: "rgb(247,249,250)", padding: "0.5rem", borderRadius: "15px" }}>
                        <i style={{ color: "green", margin: "0 auto" }} className="fas fa-thumbs-up" onClick={!!currentUser ? () => handleHaiku(id, 1) : null}></i>
                        <div style={{ margin: "0 auto" }}>{score}</div>
                        <i style={{ color: "pink", margin: "0 auto" }} className="fas fa-thumbs-down" onClick={!!currentUser ? () => handleHaiku(id, -1) : null}></i>
                    </div>
                </Grid>
                <Grid item xs zeroMinWidth >
                    <div style={{ marginTop: 0, padding: 0 }}>
                        <div style={{ fontWeight: "bold", marginBottom: "0.4rem", fontSize: "2rem", fontFamily: 'Allura' }}>"{title}"</div>
                        <div style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>{text} </div>
                        <div style={{ fontSize: "0.8rem", marginTop: "0.5rem", marginBottom: "0.5rem", fontWeight: "bold" }}>-{user}</div>
                    </div>
                </Grid>
            </Grid>
        </Paper >
    )
}


