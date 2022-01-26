import React, { useEffect } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"
import voiceKey from './services/environment'
import Container from 'react-bootstrap/Container'

import './App.css'
import { ReactComponent as VoiceLogo } from './logo_1.svg'

const App = () => {
    useEffect(() => {
        alanBtn({
            key: voiceKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                   console.log(articles)
                }
            }
        })
    }, [])

    return (
        <Container className="header">
            <div className="header-logo">
                <VoiceLogo />
                <h1 className="title">VOICE</h1>
            </div>
        </Container>
    )
}

export default App