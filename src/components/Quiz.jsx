import ProgressBar from "./ProgressBar"
import AnswerOptions from "./AnswerOptions"

export default function Quiz() {
    return(
        <div id = "quiz">
            {/* <ProgressBar/> */}
            <div id = "question-overview">
                <div id = "question">
                    <progress></progress>
                    <h2>This, by the way, is a question.</h2>
                </div>
            </div>
            <AnswerOptions/>
        </div>
    )
}