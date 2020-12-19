import React from 'react'
import './Start.css'

export default function Start(props) {
    return (
        <>
            <h1>Confident with your knowledge?</h1>
            <button onClick={props.play}>Test it now</button>
        </>
    )
}