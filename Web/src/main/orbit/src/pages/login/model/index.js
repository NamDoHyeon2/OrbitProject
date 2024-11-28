import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../api/googleLogin'; // Google 로그인 API
import { login } from '@/app/redux/authSlice';
import LoginPage from '../ui';

export const LoginModel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleLogin = async (token) => {
        try {
            const userData = await googleLogin(token); // Google API 호출
            dispatch(login(userData)); // Redux 상태 업데이트
            navigate('/dashboard'); // 대시보드로 이동
        } catch (error) {
            console.error('Google Login Error:', error);
        }
    };

    return <LoginPage handleGoogleLogin={handleGoogleLogin} />;
};
