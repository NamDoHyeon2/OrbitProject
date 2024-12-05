import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../api/googleLogin';
import { login } from '@/app/redux/authSlice';
import LoginPage from '../ui';

const LoginModel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleLogin = async (token) => {
        try {
            const userData = await googleLogin(token);
            dispatch(login(userData));
            navigate('/dashboard');
        } catch (error) {
            console.error('Google Login Error:', error);
        }
    };

    return <LoginPage handleGoogleLogin={handleGoogleLogin} />;
};

export default LoginModel;
