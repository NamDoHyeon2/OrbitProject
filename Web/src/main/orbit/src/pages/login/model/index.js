import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '@/app/redux/authSlice';
import LoginPage from '../ui';

export const LoginModel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = { username, password };
        dispatch(login(userData));
        navigate('/dashboard'); // Dashboard로 리디렉션
    };

    return (
        <LoginPage
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
        />
    );
};
