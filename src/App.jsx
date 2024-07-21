import './App.css';
import { ChakraProvider, Button, Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import logo from './assets/QuizUp.png'
import Quiz from "./Components/Quiz.jsx";
import {Amplify} from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const App = () => {
    return (
        <ChakraProvider>
            <Authenticator>
                {({ signOut }) => (
                    <Box position="relative" minHeight="100vh">
                        <Flex
                            position="absolute"
                            top={0}
                            left={4}
                            right={4}
                            justifyContent="space-between"
                            alignItems="center"
                            width="calc(100% - 32px)"
                        >
                            <Box width="100px" height="100px"> {/* Adjust these values as needed */}
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    objectFit="contain"
                                    width="100%"
                                    height="100%"
                                />
                            </Box>
                            <Button
                                onClick={signOut}
                                size="sm"
                                colorScheme="red"
                            >
                                Sign Out
                            </Button>
                        </Flex>
                        <Flex
                            className="App"
                            direction="column"
                            align="center"
                            justify="flex-start"
                            minHeight="100vh"
                            pt={[150, 60]}
                        >
                            <Heading as="h1" size="xl" mb={15} textAlign="center">
                                AWS Cloud Practitioner Practice Questions
                            </Heading>
                            <Text fontSize="md" mb={[16, 16]} textAlign="center" maxWidth={['300px', '600px']}>
                                This app contains sample questions similar to those found in the AWS Certified Cloud Practitioner exam.
                                Use these to test your knowledge and prepare for the certification. Good luck with your studies!
                            </Text>
                            <Quiz />
                        </Flex>
                    </Box>
                )}
            </Authenticator>
        </ChakraProvider>
    );
}

export default withAuthenticator(App);