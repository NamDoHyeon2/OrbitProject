import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, googleSignup, kakaoSignup, niceAuth } from '../api/signupApi';
import Signup from '../ui/Signup';

const SignupModel = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordCheck: '',
        phoneNumber: '', // 추가됨
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const naverButtonRef = useRef(null);

    useEffect(() => {  
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

        const loadNaverSDK = () => {
            const script = document.createElement('script');
            script.src = 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js';
            script.async = true;

            script.onload = () => {
                try {
                    const callbackUrl =
                        process.env.REACT_APP_NAVER_CALLBACK_URL || 'http://localhost:3000/oauth/callback/naver';

                    const naverLogin = new window.naver.LoginWithNaverId({
                        clientId: 'CsgL4h2zg9T6Z7kzuN0_',
                        callbackUrl: callbackUrl,
                        isPopup: false,
                        loginButton: { color: 'green', type: 3, height: 58 },
                    });
                    naverLogin.init();
                } catch (error) {
                    console.error('Naver SDK 초기화 중 오류 발생:', error);
                }
            };

            script.onerror = () => {
                console.error('Naver SDK 로드 실패');
                alert('Naver SDK 로드에 실패했습니다. 다시 시도해주세요.');
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
            // NICE 본인인증
            const authResponse = await niceAuth(formData.phoneNumber);
            if (!authResponse.success) {
                setError('본인인증에 실패했습니다.');
                setLoading(false);
                return;
            }

            // 회원가입 진행
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
            alert('구글 로그인 성공!');
            setSuccess(true);
            navigate('/dashboard');
        } catch (error) {
            setError('구글 로그인 실패: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLoginError = () => {
        setError('구글 로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
    };

    const handleNiceAuth = async () => {      //나이스 api 파트
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
            handleKakaoLogin={kakaoSignup}
            handleNaverLogin={() => naverButtonRef.current?.click()}
            handleNiceAuth={handleNiceAuth}   //나이스 api 파트
            loading={loading}
            error={error}
            success={success}
        >
            <div id="naverIdLogin" ref={naverButtonRef}></div>
        </Signup>
    );
};

export default SignupModel;


