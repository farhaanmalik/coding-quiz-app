import { useState } from "react"
import checked from '../assets/checked.png'
import cross from '../assets/cross.png'

const HtmlQuiz = ({ handleBackToHome }) => {

    const questions = [
        {
            questionText: 'The <title> element must be located inside',
            answerOptions: [
                { answerText: 'the <head> element', isCorrect: true },
                { answerText: 'the <body> element', isCorrect: false },
            ],
        },
        {
            questionText: 'Where we can use the <style> tag?',
            answerOptions: [
                { answerText: 'In the <head> element', isCorrect: false },
                { answerText: 'In the <body> element', isCorrect: false },
                { answerText: 'In the <head> and <body> elements', isCorrect: true },
            ],
        },
        {
            questionText: 'Which tag is used to create a hyperlink?',
            answerOptions: [
                { answerText: '<a>', isCorrect: true },
                { answerText: '<img>', isCorrect: false },
                { answerText: '<dl>', isCorrect: false },
                { answerText: '<link>', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the tags below must be located in the <head> section of your page?',
            answerOptions: [
                { answerText: '<title>', isCorrect: false },
                { answerText: '<meta>', isCorrect: true },
                { answerText: '<form>', isCorrect: false },
                { answerText: '<link>', isCorrect: false },
            ],
        },
        {
            questionText: '<h6> is the biggest heading tag.',
            answerOptions: [
                { answerText: 'False', isCorrect: true },
                { answerText: 'True', isCorrect: false },
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
                                <h2 className="text-2xl text-white font-semibold tracking-wide">Basic HTML</h2>
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

export default HtmlQuiz
