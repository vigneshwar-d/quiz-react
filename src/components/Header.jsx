import headerImg from "../assets/quiz-logo.png"

export default function Header() {
    return(
        <header>
            <img src = {headerImg} alt = "Header Image" />
            <h1>REACTQUIZ</h1>
        </header>
    )
}