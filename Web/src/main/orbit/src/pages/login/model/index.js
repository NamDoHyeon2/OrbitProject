import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLoginApi, kakaoLoginApi, naverLoginApi } from '../api';
import { login } from '@/app/redux/authSlice';
import LoginPage from '../ui';

const LoginModel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleLogin = async (token) => {
        try {
            const userData = await googleLoginApi(token);
            dispatch(login(userData));
            navigate('/dashboard');
        } catch (error) {
            console.error('Google Login Error:', error);
        }
    };

    const handleKakaoLogin = async (token) => {
        try {
            const userData = await kakaoLoginApi(token);
            dispatch(login(userData));
            navigate('/dashboard');
        } catch (error) {
            console.error('Kakao Login Error:', error);
        }
    };

    const handleNaverLogin = async (token) => {
        try {
            const userData = await naverLoginApi(token);
            dispatch(login(userData));
            navigate('/dashboard');
        } catch (error) {
            console.error('Naver Login Error:', error);
        }
    };

    return (
        <LoginPage
            handleGoogleLogin={handleGoogleLogin}
            handleKakaoLogin={handleKakaoLogin}
            handleNaverLogin={handleNaverLogin}
        />
    );
};

export default LoginModel;
