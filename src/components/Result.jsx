import React from 'react'
import './Result.css'

export default function Result(props) {
    let isSuccess = props.score > 0
    return (
        <div className={!isSuccess ? "result fail" : "result success"}>
            <p>{isSuccess ? "Congratulations!" : "Sadly :("}</p>
            <p>Your score is {props.score}</p>
        </div>
    )
}