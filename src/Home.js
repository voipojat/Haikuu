import React, { useContext, useState } from 'react'
import { HaikuContext } from './HaikuList'
import Haiku from './Haiku.js'

function Home() {
    const { haikus, setHaiku } = useContext(HaikuContext);

    return (
        <div>
            <h1 style={{ margin: "1rem" }}>Haikuu - awaken your inner poet!</h1>
            <h2 style={{ margin: "1rem" }}>Popular haikus</h2>
            {haikus.map(haiku => (
                <Haiku id={haiku.id} title={haiku.title} text={haiku.text} user={haiku.user} score={haiku.score} />
            ))}
        </div>
    )
}
export default Home