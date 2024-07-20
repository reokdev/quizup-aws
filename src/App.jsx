import './App.css';
import {Amplify} from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const App = () => {
    return (
        <div className="App">
            <Authenticator>
                {({ Logout }) => (
                    <main>
                        <header className='App-header'>
                            <button
                                onClick={Logout}
                                style={{
                                    margin: '20px',
                                    fontSize: '0.8rem',
                                    padding: '5px 10px',
                                    marginTop: '20px'
                                }}
                            >
                                Logout
                            </button>
                        </header>
                    </main>
                )}
            </Authenticator>
        </div>
    );
}

export default withAuthenticator(App);