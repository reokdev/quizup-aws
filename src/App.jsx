import './App.css';
import { ChakraProvider, Button, Box, Flex } from '@chakra-ui/react';
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
                            justify="center"
                            minHeight="100vh"
                            pt={16}
                        >
                            <Quiz />
                        </Flex>
                    </Box>
                )}
            </Authenticator>
        </ChakraProvider>
    );
}

export default withAuthenticator(App);