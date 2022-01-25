import React, { useEffect } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"

const voiceKey = 'd1ddda4a13d91a5c9dc9398e019d867b2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {

    useEffect(() => {
        alanBtn({
            key: voiceKey,
            onCommand: ({ command }) => {
                if (command === 'testCommand') {
                    alert('this code was executed')
                }
            }
        })
    }, [])

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Ask anything...</h1>
        </div>
    )
}

export default App