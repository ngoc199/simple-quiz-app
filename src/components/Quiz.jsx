import React from 'react'
import Answer from './Answer'
import './Quiz.css'

export default function Quiz(props) {

    function getAnswerIndex(answerIndex) {
        // Receive answer index and calculate the score value
        if (answerIndex === props.question.correctIndex) {
            props.addScore(1);
        } else {
            props.addScore(0);
        }
    }

    return (
        <>
            <div className="progress-bar">
                <div className="progress" style={{width: props.progress * 100 + '%'}}></div>
            </div>
        <div className="quiz">
            <p className="question">{props.question.question}</p>
            <div className="answers">
            {props.question.answers.map((answer, index) => <Answer answer={answer} key={index} getAnswerIndex={getAnswerIndex} answerIndex={index} />)}
            </div>
        </div>
        </>
    )
}