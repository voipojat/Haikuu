import React, { useState, useEffect } from 'react'
import firebase from '../Fire'

export const HaikuContext = React.createContext();
export function HaikuProvider(props) {

    const [haikus, setHaiku] = useState([])
    return (
        <HaikuContext.Provider value={{ haikus, setHaiku }}>
            {props.children}
        </HaikuContext.Provider>
    )
}



