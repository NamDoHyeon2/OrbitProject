import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, googleSignup, kakaoSignup, naverSignup } from '../api/signupApi';
import Signup from '../ui/Signup';
import axios from 'axios';

const SignupModel = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordCheck: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // Kakao SDK 로드
        const loadKakaoSDK = () => {
            if (window.Kakao) {
                if (!window.Kakao.isInitialized()) {
                    window.Kakao.init('1357752957088d46c210167828b9cc10');
                }
                return;
            }
            const script = document.createElement('script');
            script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
            script.async = true;
            script.onload = () => {
                if (window.Kakao) {
                    window.Kakao.init('1357752957088d46c210167828b9cc10');
                }
            };
            document.body.appendChild(script);
        };

        // Naver SDK 로드
        const loadNaverSDK = () => {
            const script = document.createElement('script');
            script.src = 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js';
            script.async = true;
            script.onload = () => {
                const naverLogin = new window.naver.LoginWithNaverId({
                    clientId: 'CsgL4h2zg9T6Z7kzuN0_',
                    callbackUrl: 'http://localhost:3000/oauth/callback/naver',
                    isPopup: false,
                    loginButton: { color: 'green', type: 3, height: 58 },
                });
                naverLogin.init();
            };
            document.body.appendChild(script);
        };

        loadKakaoSDK();
        loadNaverSDK();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        if (formData.password !== formData.passwordCheck) {
            setError('비밀번호가 일치하지 않습니다.');
            setLoading(false);
            return;
        }

        try {
            await signup(formData);
            setSuccess(true);
            navigate('/login');
        } catch (error) {
            setError(error.response?.data?.message || '회원가입 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        try {
            await googleSignup(credentialResponse.credential);
            setSuccess(true);
        } catch (error) {
            setError(
                error.response?.data?.message || 'Google 회원가입 중 오류가 발생했습니다.'
            );
        }
    };

    const handleGoogleLoginError = () => {
        setError('Google 로그인에 실패했습니다. 다시 시도해주세요.');
    };

    return (
        <Signup
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleGoogleLoginSuccess={handleGoogleLoginSuccess}
            handleGoogleLoginError={handleGoogleLoginError}
            handleKakaoLogin={kakaoSignup}
            handleNaverLogin={naverSignup}
            loading={loading}
            error={error}
            success={success}
        />
    );
};

export default SignupModel;
