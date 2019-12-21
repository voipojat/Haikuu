import React from 'react'
import { Paper } from '@material-ui/core'
import HaikuScore from './HaikuScore'


export default function Haiku({ title, text, user, score, id }) {
    return (
        <Paper style={{ display: "inline-block", margin: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "20%", margin: "1rem 1rem 0 1rem", fontSize: "2rem", float: "left" }}>
                <i style={{ color: "green" }} className="fas fa-thumbs-up" onClick={HaikuScore(id)}></i>
                <div>{score}</div>
                <i style={{ color: "pink" }} className="fas fa-thumbs-down"></i>
            </div>
            <h1 style={{}}>{title}</h1>
            <div style={{ margin: "1rem" }}>{text}</div>
            <div style={{ textAlign: "center", margin: "1rem", fontWeight: "bold" }}>-{user}</div>
        </Paper>
    )
}