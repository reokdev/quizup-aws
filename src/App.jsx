import './App.css';
import { ChakraProvider, Button, Box, Flex, Heading, Text } from '@chakra-ui/react';
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
                            top={4}
                            right={[0, 0, 4]}
                            width={["100%", "auto"]}
                            justifyContent={["center", "flex-end"]}
                        >
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
                            pt={[20, 28]}
                        >
                            <Heading as="h1" size="xl" mb={20} textAlign="center">
                                AWS Cloud Practitioner Practice Questions
                            </Heading>
                            <Text fontSize="md" mb={8} textAlign="center" maxWidth="600px">
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