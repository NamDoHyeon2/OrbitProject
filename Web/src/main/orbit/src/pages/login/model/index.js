import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/app/redux/authSlice';
import { LoginPage } from '../ui';

export const LoginModel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { username, password };
        console.log('Login Data:', userData);

        dispatch(login(userData));
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
