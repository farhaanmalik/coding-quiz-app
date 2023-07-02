import { useState } from "react"
import checked from '../assets/checked.png'
import cross from '../assets/cross.png'

const JsQuiz = ({ handleBackToHome }) => {

    const questions = [
        {
            questionText: 'Which is the correct way to write a comment in JavaScript?',
            answerOptions: [
                { answerText: '<!--- .... ---!>', isCorrect: false },
                { answerText: '{# ... #}', isCorrect: false },
                { answerText: '// ....', isCorrect: true },
                { answerText: '\\ ...', isCorrect: false },
            ],
        },
        {
            questionText: 'JavaScript is not a case-sensitive language.',
            answerOptions: [
                { answerText: 'True', isCorrect: false },
                { answerText: 'False', isCorrect: true },
            ],
        },
        {
            questionText: 'Inside which element do you put JavaScript?',
            answerOptions: [
                { answerText: '<var>...</var>', isCorrect: false },
                { answerText: '<script>...</script>', isCorrect: true },
                { answerText: '<code>...</code>', isCorrect: false },
                { answerText: '<section>...</section>', isCorrect: false },
            ],
        },
        {
            questionText: 'How do you write "Hello World" in an alert box?',
            answerOptions: [
                { answerText: 'alertBox("Hello World");', isCorrect: false },
                { answerText: 'alert("Hello World");', isCorrect: true },
                { answerText: 'msg("Hello World");', isCorrect: false },
                { answerText: 'modal("Hello World");', isCorrect: false },
            ],
        },
        {
            questionText: 'Which array method sorts the elements of an array?',
            answerOptions: [
                { answerText: 'order()', isCorrect: false },
                { answerText: 'changeOrder(order)', isCorrect: false },
                { answerText: 'sort()', isCorrect: true },
                { answerText: 'None of the above', isCorrect: false },
            ],
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore((score) => score + 1)
        }
        if (currentIndex === questions.length - 1) {
            setQuizFinished(true)
        }
        else {
            setCurrentIndex((value) => value + 1)
        }
    }

    const handlePlayAgain = () => {
        setQuizFinished(false);
        setCurrentIndex(0);
        setScore(0)
    }

    return (
        <>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full max-w-2xl px-4" >
                <div className="bg-slate-100 shadow-md rounded-lg mt-4">
                    {quizFinished ? (
                        <div className="text-center px-4 py-8">
                            <img src={score === 0 ? cross : checked} className="w-14 m-auto" alt="" />
                            <h3 className="text-2xl mt-4"> You scored <b>{score}</b> out of <b>{questions.length}</b></h3>
                            <div className="flex items-center justify-center py-1 mt-8">
                                <button className='px-3 mx-2 text-blue-400 hover:text-blue-300' onClick={handleBackToHome}>
                                    Back To Home
                                </button>
                                <button className='px-3 mx-2 text-blue-400 hover:text-blue-300' onClick={handlePlayAgain}>
                                    Play Again
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>

                            <div className="bg-blue-400 text-center px-4 py-2 rounded-t-lg">
                                <h2 className="text-2xl text-white font-semibold tracking-wide">Basic JS</h2>
                            </div>
                            <div className="py-8 px-4">
                                <div className="pb-2">
                                    <h3 className="font-semibold text-lg"><span className="text-lg bg-slate-200 w-fit rounded-lg px-2 py-1 shadow mr-2">{currentIndex + 1} / {questions.length} </span>{questions[currentIndex].questionText}</h3>
                                </div>
                                <div className="mt-2 flex flex-col text-left">
                                    {questions[currentIndex].answerOptions.map((answer) => {
                                        return (
                                            <button className="mt-2 bg-slate-200 rounded-lg border border-slate-300 py-2 px-4 hover:bg-slate-300" onClick={() => handleAnswerClick(answer.isCorrect)} key={answer.answerText}>
                                                {answer.answerText}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div >
        </>
    )
}

export default JsQuiz
