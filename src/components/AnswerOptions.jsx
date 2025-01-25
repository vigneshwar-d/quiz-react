import { useRef, useState } from "react"

export default function AnswerOptions({ answers, onSelect }) {
    let timer = useRef()
    const [optionClassName, setOptionClassName] = useState("")

    function handleOptionClick(isAnswer) {
        timer = setInterval(() => {
            onSelect(isAnswer)
            clearInterval(timer)
        }, 1000)
        // setOptionClassName(isAnswer ? "correct" : "wrong")
    }
    
    return (
        <div className="answer">
            <ul id="answers">
                {
                    answers.map((option, index) => {
                        return <li key={index} className="answer">
                            <button className={optionClassName} onClick={() => handleOptionClick(option.isCorrect)}>{option.text}</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}