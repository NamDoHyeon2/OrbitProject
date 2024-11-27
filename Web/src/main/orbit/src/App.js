import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AppRoutes from './routes/AppRoutes';

const App = () => {
    const clientId = '871036489093-hkfl3tack8d6d8puumpas6a0qt22jvgq.apps.googleusercontent.com';

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <Router>
                <AppRoutes />
            </Router>
        </GoogleOAuthProvider>
    );
};

export default App;
