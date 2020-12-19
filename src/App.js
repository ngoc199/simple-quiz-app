import data from "./quiz.json";
import Quiz from "./components/Quiz";
import { useState } from "react";
import Result from "./components/Result";
import Start from "./components/Start";

function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [score, setScore] = useState(0);
	const [questionIndex, setQuestionIndex] = useState(0);

	let numberOfQuestions = data.questions.length;

	function play() {
		setIsPlaying(true);
	}

	function addScore(addedScore) {
		setScore(score + addedScore);

		// Go to next question
		if (questionIndex < numberOfQuestions - 1) {
			setQuestionIndex(questionIndex + 1);
		}
	}

	if (!isPlaying) {
		return <Start play={play} />;
	}
	if (questionIndex === numberOfQuestions - 1) {
		return <Result score={score} />;
	} else {
		return (
			<Quiz
				question={data.questions[questionIndex]}
				addScore={addScore}
				progress={questionIndex / numberOfQuestions}
			/>
		);
	}
}

export default App;
