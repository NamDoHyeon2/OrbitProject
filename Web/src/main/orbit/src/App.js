import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './styles/Global.module.css'; // 전역 스타일 적용

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default App;
