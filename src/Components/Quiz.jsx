import { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
    Container,
    List,
    ListItem,
    ListIcon,
    useBreakpointValue,
} from '@chakra-ui/react';
import ConfettiExplosion from 'react-confetti-explosion';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import quizData from './quizData';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState(null);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [isExploding, setIsExploding] = useState(false);

    const buttonFontSize = useBreakpointValue({ base: "xs", sm: "sm", md: "md" });

    useEffect(() => {
        shuffleQuestions();
    }, []);

    const shuffleQuestions = () => {
        setQuestions([...quizData].sort(() => Math.random() - 0.5));
    };

    const handleAnswer = (selectedAnswer) => {
        if (answer !== null) return;
        setAnswer(selectedAnswer);
        if (selectedAnswer === questions[currentIndex].answer) {
            setScore(s => s + 1);
            setIsExploding(true);
        }
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
            setAnswer(null);
            setIsExploding(false);
        } else {
            setQuizCompleted(true);
        }
    };

    const retakeQuiz = () => {
        shuffleQuestions();
        setCurrentIndex(0);
        setScore(0);
        setAnswer(null);
        setQuizCompleted(false);
        setIsExploding(false);
    };

    if (questions.length === 0) return <Text>Loading...</Text>;

    if (quizCompleted) {
        return (
            <Container centerContent>
                <VStack spacing={6}>
                    <Heading>Quiz Completed!</Heading>
                    <Text fontSize="xl">Your score: {score} out of {questions.length}</Text>
                    <Button
                        onClick={retakeQuiz}
                        colorScheme="blue"
                        size="lg"
                        fontSize={buttonFontSize}
                    >
                        Retake Quiz
                    </Button>
                </VStack>
            </Container>
        );
    }

    const question = questions[currentIndex];
    const isAnswered = answer !== null;

    return (
        <Container maxW="container.md" centerContent>
            {isExploding && <ConfettiExplosion />}
            <VStack spacing={4} align="stretch" w="100%">
                <Heading size="md">Question {currentIndex + 1}/{questions.length}</Heading>
                <Text fontSize="lg" marginBottom={[4, 8]}>{question.question}</Text>
                {question.options.map(option => (
                    <Button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        isDisabled={isAnswered}
                        colorScheme={isAnswered ?
                            (option === question.answer ? 'green' :
                                option === answer ? 'red' : 'gray') : 'blue'}
                        fontSize={buttonFontSize}
                        py={[2, 3]}
                        px={[3, 4]}
                        whiteSpace="normal"
                        height="auto"
                        variant={isAnswered && option !== answer && option !== question.answer ? 'outline' : 'solid'}
                    >
                        {option}
                    </Button>
                ))}
                {isAnswered && (
                    <Box>
                        <Text fontWeight="bold" color={answer === question.answer ? 'green.500' : 'red.500'}>
                            {answer === question.answer ? 'Correct! 🎉' : 'Incorrect 😔'}
                        </Text>
                        <List spacing={3}>
                            {question.explanation.map((point, i) => (
                                <ListItem key={i}>
                                    <ListIcon as={answer === question.answer ? CheckCircleIcon : WarningIcon} color={answer === question.answer ? 'green.500' : 'red.500'} />
                                    {point}
                                </ListItem>
                            ))}
                        </List>
                        <Button onClick={nextQuestion} colorScheme="blue" mt={4}>
                            {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                )}
            </VStack>
        </Container>
    );
}

export default Quiz;