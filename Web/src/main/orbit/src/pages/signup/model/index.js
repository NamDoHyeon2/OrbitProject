import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, googleSignup, kakaoSignup, niceAuth } from '../api/index';
import Signup from '../ui/index';

const SignupModel = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordCheck: '',
        phoneNumber: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const [naverLogin, setNaverLogin] = useState(null);

    useEffect(() => {
        // Kakao SDK 로드 및 초기화
        const loadKakaoSDK = () => {
            if (!window.Kakao) {
                const script = document.createElement('script');
                script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
                script.async = true;
                script.onload = () => {
                    if (window.Kakao) {
                        window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
                        console.log('Kakao SDK Initialized');
                    }
                };
                document.body.appendChild(script);
            } else if (!window.Kakao.isInitialized()) {
                window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
                console.log('Kakao SDK Initialized');
            }
        };

        // Naver SDK 로드 및 초기화
        const loadNaverSDK = () => {
            const script = document.createElement('script');
            script.src = 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js';
            script.async = true;
            script.onload = () => {
                if (window.naver) {
                    // 네이버 로그인 객체 생성 및 초기화
                    const naverLogin = new window.naver.LoginWithNaverId({
                        clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
                        callbackUrl:
                            process.env.REACT_APP_NAVER_CALLBACK_URL || 'http://localhost:3000/oauth/callback/naver',
                        isPopup: true,
                    });
                    naverLogin.init();

                    // 로그인 객체를 상태에 저장
                    setNaverLogin(naverLogin);
                    console.log('Naver SDK Initialized');
                } else {
                    console.error('Naver SDK 로드 실패');
                }
            };
            script.onerror = () => {
                console.error('Naver SDK 로드 실패');
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

    const handleGoogleLoginSuccess = async (response) => {
        setLoading(true);
        setError('');
        try {
            await googleSignup(response.credential);
            alert('구글 회원가입 성공!');
            setSuccess(true);
            navigate('/dashboard');
        } catch (error) {
            setError('구글 회원가입 실패: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLoginError = () => {
        setError('구글 로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
    };

    const handleKakaoLogin = () => {
        kakaoSignup();
    };

    // 수정된 부분
    const handleNaverLogin = () => {
        if (naverLogin) {
            naverLogin.authorize(); // 로그인 프로세스 시작
        } else {
            alert('네이버 SDK 로드 중입니다. 잠시 후 다시 시도해주세요.');
            console.error('Naver Login 객체가 초기화되지 않았습니다.');
        }
    };

    const handleNiceAuth = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await niceAuth(formData.phoneNumber);
            alert('본인인증 성공: ' + response.message);
        } catch (error) {
            setError('본인인증 실패: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <Signup
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleGoogleLoginSuccess={handleGoogleLoginSuccess}
            handleGoogleLoginError={handleGoogleLoginError}
            handleKakaoLogin={handleKakaoLogin}
            handleNaverLogin={handleNaverLogin}
            handleNiceAuth={handleNiceAuth}
            loading={loading}
            error={error}
            success={success}
        />
    );
};

export default SignupModel;
