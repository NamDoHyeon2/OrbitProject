import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    signupApi,
    googleSignupApi,
    kakaoSignupApi,
    naverSignupApi,
} from '../api';
import SignupPage from '../ui';

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
        // Kakao SDK 로드 및 초기화
        const loadKakaoSDK = () => {
            if (!window.Kakao) {
                const script = document.createElement('script');
                script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
                script.onload = () => {
                    window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
                };
                document.body.appendChild(script);
            } else if (!window.Kakao.isInitialized()) {
                window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
            }
        };

        // Naver SDK 로드
        const loadNaverSDK = () => {
            const script = document.createElement('script');
            script.src = 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js';
            script.onload = () => {
                console.log('Naver SDK Loaded');
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
            await signupApi(formData);
            setSuccess(true);
            navigate('/login');
        } catch (error) {
            setError(error.response?.data?.message || '회원가입 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    // Google 회원가입 핸들러
    const handleGoogleSignup = () => {
        if (window.google) {
            const client = window.google.accounts.oauth2.initTokenClient({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: 'profile email',
                callback: async (tokenResponse) => {
                    try {
                        const token = tokenResponse.access_token;
                        await googleSignupApi(token);
                        setSuccess(true);
                        navigate('/login');
                    } catch (error) {
                        setError(error.response?.data?.message || 'Google 회원가입 중 오류가 발생했습니다.');
                    }
                },
            });
            client.requestAccessToken();
        } else {
            setError('Google SDK 로드 중 오류가 발생했습니다.');
        }
    };

    // Kakao 회원가입 핸들러
    const handleKakaoSignup = () => {
        window.Kakao.Auth.login({
            scope: 'profile_nickname, account_email',
            success: async (authObj) => {
                try {
                    const token = authObj.access_token;
                    await kakaoSignupApi(token);
                    setSuccess(true);
                    navigate('/login');
                } catch (error) {
                    setError('Kakao 회원가입 중 오류가 발생했습니다.');
                }
            },
            fail: (err) => {
                setError('Kakao 로그인에 실패했습니다.');
            },
        });
    };

    // Naver 회원가입 핸들러
    const handleNaverSignup = () => {
        const naverLogin = new window.naver.LoginWithNaverId({
            clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
            callbackUrl: 'http://localhost:3000/oauth/callback/naver',
            isPopup: true,
        });
        naverLogin.init();
        naverLogin.getLoginStatus(async (status) => {
            if (status) {
                try {
                    const token = naverLogin.accessToken.accessToken;
                    await naverSignupApi(token);
                    setSuccess(true);
                    navigate('/login');
                } catch (error) {
                    setError('Naver 회원가입 중 오류가 발생했습니다.');
                }
            } else {
                setError('Naver 로그인에 실패했습니다.');
            }
        });
    };

    return (
        <SignupPage
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleGoogleSignup={handleGoogleSignup}
            handleKakaoSignup={handleKakaoSignup}
            handleNaverSignup={handleNaverSignup}
            loading={loading}
            error={error}
            success={success}
        />
    );
};

export default SignupModel;
