import React from 'react'
import './Answer.css'

export default function Answer(props) {

    function chooseAnswer(e) {
        // Send the answer index to the parent element
        props.getAnswerIndex(props.answerIndex);
    }

    return (
        <div onClick={chooseAnswer} className="answer">
            <p>{props.answer}</p>
        </div>
    )
}