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
} from '@chakra-ui/react';
import { MdCheckCircle, MdError } from 'react-icons/md';
import quizData from './quizData';

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState(null);

    // choose a random q from dataset
    useEffect(() => {
        setQuestions([...quizData].sort(() => Math.random() - 0.5));
    }, []);

    // if no questions, show loading indicator rather than nothing
    if (questions.length === 0) return <Text>Loading...</Text>;
    if (currentIndex >= questions.length) {
        return (
            <Container centerContent>
                <Heading>Quiz Completed!</Heading>
                <Text fontSize="xl">Score: {score}/{questions.length}</Text>
            </Container>
        );
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
        <Container maxW="container.md" centerContent>
            <VStack spacing={4} align="stretch" w="100%">
                <Heading size="md">Question {currentIndex + 1}/{questions.length}</Heading>
                <Text fontSize="lg">{question.question}</Text>
                {question.options.map(option => (
                    <Button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        isDisabled={isAnswered}
                        colorScheme={isAnswered ?
                            (option === question.answer ? 'green' :
                                option === answer ? 'red' : 'gray') : 'blue'}
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
                                    <ListIcon as={answer === question.answer ? MdCheckCircle : MdError} color={answer === question.answer ? 'green.500' : 'red.500'} />
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