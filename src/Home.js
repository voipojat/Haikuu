import React, { useContext, useEffect } from 'react'
import { HaikuContext } from './context/HaikuList'
import Haiku from './Haiku'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { FormContext } from './context/FormContext'
import { makeStyles } from '@material-ui/core/styles';
import firebase from './Fire'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3)
    },

}));

function Home() {
    const classes = useStyles();
    const { haikus, setHaiku } = useContext(HaikuContext);
    const { formSent } = useContext(FormContext)

    const db = firebase.firestore();
    let haikuList = db.collection('haikus').doc('8LMQarulirmmNLL8dTqY');
    useEffect(() => {
        haikuList.get()
            .then(doc => {

                if (!doc.exists) {
                    setHaiku([])
                } else {
                    setHaiku(doc.data().haikus);
                }
            })
            .catch(err => {
                setHaiku([])
            });

    })
    return (
        <div >
            {formSent === true ?
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}
                ><h1 style={{ background: "rgb(104,114,165)", color: "white", borderRadius: "15px", padding: "0.5rem", marginTop: "0.5rem", fontWeight: "400", display: "inline-block" }}>Your haiku was created!</h1>
                    <CheckCircleIcon style={{ fontSize: "10rem", display: "inline-block" }} />
                </div> :
                <> <div style={{ textAlign: "center" }}>
                    <h1 style={{ background: "rgb(104,114,165)", color: "white", display: "inline-block", borderRadius: "15px", padding: "0.5rem", marginTop: "0.5rem", fontWeight: "400" }}>
                        Popular haikus</h1></div>
                    <div className={classes.root} >
                        <div style={{ position: "absolute", top: "140px", left: "0px", right: "0px", bottom: "0px", overflowY: "scroll" }}>
                            {haikus.map(haiku => (
                                <Haiku key={haiku.id} id={haiku.id} title={haiku.title} text={haiku.text} user={haiku.user} score={haiku.score} userVote={haiku.userVote} />
                            ))}
                        </div>

                    </div></>}
        </div>
    )
}
export default Home