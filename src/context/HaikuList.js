import React, { useState } from 'react'

export const HaikuContext = React.createContext();
export function HaikuProvider(props) {
    const initialHaikus = JSON.parse(window.localStorage.getItem("haikus") || "[]")
    const [haikus, setHaiku] = useState(initialHaikus)

    return (
        <HaikuContext.Provider value={{ haikus, setHaiku }}>
            {props.children}
        </HaikuContext.Provider>
    )
}



