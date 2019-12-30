import React, { useEffect, useContext } from 'react'
import uuid from 'uuid/v4'
import { TextField, Button } from '@material-ui/core'
import useInputState from './hooks/useInputState'
import { AuthContext } from './context/Auth'
import { HaikuContext } from './context/HaikuList'
import { FormContext } from './context/FormContext'
import { Redirect } from 'react-router-dom'

function StoryField() {
    const { haikus, setHaiku } = useContext(HaikuContext)
    const { formSent, handleForm } = useContext(FormContext)
    const { currentUser } = useContext(AuthContext);
    const [title, handleTitle] = useInputState("")
    const [text, handleText] = useInputState("")

    const score = 0;
    const userVote = [];
    const handleHaiku = (title, text, user, score, userVote) => {
        setHaiku([...haikus, { id: uuid(), title: title, text: text, user: user, score: score, userVote: userVote }])
        handleForm(true);
        setTimeout(() => {
            handleForm(false)
        }, 1500);
    }
    useEffect(() => {
        haikus.sort((a, b) => b.score - a.score);
        window.localStorage.setItem("haikus", JSON.stringify(haikus))
    })

    if (formSent || !currentUser) {
        return <Redirect to={"/"} />
    }

    if (currentUser || !formSent)
        return (
            <div style={{ textAlign: " center" }}>
                <form onSubmit={() => handleHaiku(title, text, currentUser.email, score, userVote)} style={{ display: "inline-block", marginBottom: "1rem" }}>
                    <TextField label="Title" autoFocus style={{ marginTop: "1rem" }}
                        title={title} onChange={handleTitle} required />
                    <TextField multiline variant="outlined" style={{ width: "98%", margin: "1rem 0", backgroundColor: "rgb(247,249,250)", border: "2px solid rgb(63,81,181)" }} rows="15"
                        text={text} onChange={handleText} required />
                    <Button variant="contained" type="submit" style={{ backgroundColor: "rgb(63,81,181)", color: "white" }} >Submit</Button>
                </form>
                <div style={{ margin: "auto 0" }}>Traditional Haiku Structure
                        <p>1. There are only three lines, totaling 17 syllables.</p>
                    <p>2. The first line is 5 syllables.</p>
                    <p>3. The second line is 7 syllables.</p>
                    <p>4. The third line is 5 syllables like the first.</p>
                </div>
            </div>
        )
}

export default StoryField