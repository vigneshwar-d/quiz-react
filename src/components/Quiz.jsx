import { useState } from "react"
import AnswerOptions from "./AnswerOptions"
import { QUIZ } from "../data.js"

export default function Quiz() {
    const [quizComplete, setQuizComplete] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [responsesArr, setResponsesArr] = useState([])

    function handleSelectAnswer(answer) {
        setResponsesArr((prevArr) => {
            let newArr = [...prevArr]
            newArr[currentQuestion] = answer
            return newArr
        })
        if (currentQuestion < QUIZ.length-1) { 
            setCurrentQuestion((currentValue) => {
                return currentValue += 1
            })
        } else {
            setQuizComplete(true)
        }
    }

    return (
        <>
            {quizComplete ? <p>TODO: Answer summary</p> :
                <div id="quiz">
                    {/* <ProgressBar/> */}
                    <div id="question-overview">
                        <div id="question">
                            <progress></progress>
                            <h2>{QUIZ[currentQuestion].question}</h2>
                        </div>
                    </div>
                    <AnswerOptions answers={QUIZ[currentQuestion].answers} onSelect={handleSelectAnswer} />
                </div>
            }
        </>
    )
}