import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Quiz from "./Components/Quiz.jsx";
import {Amplify} from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const App = () => {
    return (
        <ChakraProvider>
            <div className="App">
                <Authenticator>
                    {({ signOut }) => (
                        <main>
                            <header className='App-header'>
                                <Quiz />
                                <button
                                    onClick={signOut}
                                    style={{
                                        margin: '20px',
                                        fontSize: '0.8rem',
                                        padding: '5px 10px',
                                        marginTop: '20px'
                                    }}
                                >
                                    Sign Out
                                </button>
                            </header>
                        </main>
                    )}
                </Authenticator>
            </div>
        </ChakraProvider>
    );
}

export default withAuthenticator(App);