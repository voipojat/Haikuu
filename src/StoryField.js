import React, { useEffect, useContext, useState } from 'react'
import uuid from 'uuid/v4'
import { TextField, Button } from '@material-ui/core'
import useInputState from './hooks/useInputState'
import { AuthContext } from './Auth'
import { HaikuContext } from './HaikuList'

function StoryField() {
    const { haikus, setHaiku } = useContext(HaikuContext)
    const { currentUser } = useContext(AuthContext);
    const [title, handleTitle] = useInputState("")
    const [text, handleText] = useInputState("")
    const score = 0;

    const handleHaiku = (title, text, user, score) => {
        setHaiku([...haikus, { id: uuid(), title: title, text: text, user: user, score: score }])
    }
    useEffect(() => {
        window.localStorage.setItem("haikus", JSON.stringify(haikus))
    })
    return (
        <form onSubmit={() => handleHaiku(title, text, currentUser.email, score)} style={{ textAlign: "center", margin: "0 auto", width: "40%", height: "50vh" }}>
            <TextField label="Title" autoFocus style={{ marginTop: "1rem" }}
                title={title} onChange={handleTitle} />
            <TextField multiline variant="outlined" style={{ width: "98%", margin: "1rem 0" }} rows="15"
                text={text} onChange={handleText} />
            <Button variant="contained" type="submit">Submit</Button>
        </form>
    )
}

export default StoryField