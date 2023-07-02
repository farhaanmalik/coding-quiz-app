import { useState } from "react"
import checked from '../assets/checked.png'
import cross from '../assets/cross.png'

const CssQuiz = ({ handleBackToHome }) => {

    const questions = [
        {
            questionText: 'CSS stands for',
            answerOptions: [
                { answerText: 'Cascading Style Sheets', isCorrect: true },
                { answerText: 'Computer Style Sheets', isCorrect: false },
                { answerText: 'Creative Style Sheets', isCorrect: false },
            ],
        },
        {
            questionText: 'How can you add space between the border and inner content of the element?',
            answerOptions: [
                { answerText: 'margin', isCorrect: false },
                { answerText: 'space', isCorrect: false },
                { answerText: 'padding', isCorrect: true },
                { answerText: 'border', isCorrect: false },
            ],
        },
        {
            questionText: 'How to set a style for a certain HTML element with an id of "special"?',
            answerOptions: [
                { answerText: '.special{ }', isCorrect: false },
                { answerText: 'id.special{ }', isCorrect: false },
                { answerText: '#special{ }', isCorrect: true },
                { answerText: 'element.id.special{ }', isCorrect: false },
            ],
        },
        {
            questionText: 'Which property do you need to change the text color of an element?',
            answerOptions: [
                { answerText: 'fontcolor', isCorrect: false },
                { answerText: 'color', isCorrect: true },
                { answerText: 'font-color', isCorrect: false },
                { answerText: 'text-color', isCorrect: false },
            ],
        },
        {
            questionText: 'Which selector do you need to define a style for multiple elements?',
            answerOptions: [
                { answerText: 'id', isCorrect: false },
                { answerText: 'class', isCorrect: true },
                { answerText: 'text', isCorrect: false },
                { answerText: 'style', isCorrect: false },
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
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full max-w-2xl p-4" >
                <div className="bg-slate-100 shadow-md rounded-lg mt-4">
                    {quizFinished ? (
                        <div className="text-center px-4 py-8">
                            <img src={score === 0 ? cross : checked} className="w-14 m-auto mt-4" alt="" />
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
                                <h2 className="text-2xl text-white font-semibold tracking-wide">Basic CSS</h2>
                            </div>
                            <div className="py-8 px-4">
                                <div className="pb-2">
                                    <h3 className="font-semibold text-lg"><span className="text-lg bg-slate-200 w-fit rounded-lg px-2 py-1 shadow mr-2">{currentIndex + 1} / {questions.length} </span> {questions[currentIndex].questionText}</h3>
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

export default CssQuiz
