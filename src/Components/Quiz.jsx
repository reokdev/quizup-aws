import { useState, useEffect } from 'react';
import quizData from './quizData';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState(null);

    useEffect(() => {
        // select a random question from quizData
        setQuestions([...quizData].sort(() => Math.random() - 0.5));
    }, []);

    if (questions.length === 0) return <div>Loading...</div>;
    if (currentIndex >= questions.length) {
        return <div>Quiz completed! Score: {score}/{questions.length}</div>;
    }

    const question = questions[currentIndex];
    const isAnswered = answer !== null;

    const handleAnswer = (selectedAnswer) => {
        if (isAnswered) return;
        setAnswer(selectedAnswer);
        if (selectedAnswer === question.answer) setScore(s => s + 1);
    };

    const nextQuestion = () => {
        setCurrentIndex(i => i + 1);
        setAnswer(null);
    };

    return (
        <div>
            <h3>Question {currentIndex + 1}/{questions.length}</h3>
            <p>{question.question}</p>
            {question.options.map(option => (
                <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    disabled={isAnswered}
                    style={{backgroundColor: isAnswered ?
                            (option === question.answer ? 'lightgreen' :
                                option === answer ? 'pink' : '') : ''}}
                >
                    {option}
                </button>
            ))}
            {isAnswered && (
                <>
                    <p>{answer === question.answer ? 'Correct! 🎉' : 'Incorrect.'}</p>
                    <ul>
                        {question.explanation.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                    <button onClick={nextQuestion}>
                        {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </>
            )}
        </div>
    );
}

export default Quiz;