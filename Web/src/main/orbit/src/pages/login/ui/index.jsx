// LoginPage.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '@/shared/style/global.css';
import styles from './styles.module.css';

import googleIcon from '@/shared/assets/img/google-logo.png';
import naverIcon from '@/shared/assets/img/naver-logo.png';
import kakaoIcon from '@/shared/assets/img/kakao-logo.png';
import logo from '@/shared/assets/img/logo.png';

import { login } from '@/app/redux/authSlice';
import { loginApi } from '../api';

const LoginPage = ({ handleGoogleLogin, handleKakaoLogin, handleNaverLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberId, setRememberId] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Kakao SDK 로드 및 초기화
        const loadKakaoSDK = () => {
            if (!window.Kakao) {
                const script = document.createElement('script');
                script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
                script.onload = () => {
                    window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
                    console.log('Kakao SDK Initialized');
                };
                document.body.appendChild(script);
            } else if (!window.Kakao.isInitialized()) {
                window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
                console.log('Kakao SDK Initialized');
            }
        };

        // Naver SDK 로드 및 초기화
        const loadNaverSDK = () => {
            if (!window.naver) {
                const script = document.createElement('script');
                script.src = 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js';
                script.onload = () => {
                    console.log('Naver SDK Loaded');
                };
                document.body.appendChild(script);
            }
        };

        // Google SDK 로드
        const loadGoogleSDK = () => {
            if (!window.google) {
                const script = document.createElement('script');
                script.src = 'https://accounts.google.com/gsi/client';
                script.async = true;
                script.defer = true;
                script.onload = () => {
                    console.log('Google SDK Loaded');
                };
                document.body.appendChild(script);
            }
        };

        loadKakaoSDK();
        loadNaverSDK();
        loadGoogleSDK();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await loginApi(username, password);
            dispatch(login(userData));
            navigate('/dashboard');
        } catch (error) {
            setError('로그인에 실패했습니다.');
            console.error('Login Error:', error);
        }
    };

    const handleGoogleLoginClick = () => {
        if (window.google) {
            const client = window.google.accounts.oauth2.initTokenClient({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: 'profile email',
                callback: async (tokenResponse) => {
                    try {
                        const token = tokenResponse.access_token;
                        await handleGoogleLogin(token);
                    } catch (error) {
                        setError('Google 로그인에 실패했습니다.');
                        console.error('Google Login Error:', error);
                    }
                },
            });
            client.requestAccessToken();
        } else {
            setError('Google SDK 로드 중 오류가 발생했습니다.');
        }
    };

    const handleKakaoLoginClick = () => {
        if (window.Kakao && window.Kakao.Auth) {
            window.Kakao.Auth.login({
                scope: 'profile_nickname', //값
                success: async (authObj) => {
                    try {
                        const token = authObj.access_token;
                        await handleKakaoLogin(token);
                    } catch (error) {
                        setError('Kakao 로그인에 실패했습니다.');
                        console.error('Kakao Login Error:', error);
                    }
                },
                fail: (err) => {
                    setError('Kakao 로그인에 실패했습니다.');
                    console.error('Kakao Login Error:', err);
                },
            });
        } else {
            setError('Kakao SDK 로드 중 오류가 발생했습니다.');
        }
    };

    const handleNaverLoginClick = () => {
        const naverLogin = new window.naver.LoginWithNaverId({
            clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
            callbackUrl: 'http://localhost:3000/oauth/callback/naver',
            isPopup: true,
            loginButton: { color: 'green', type: 3, height: 58 },
        });
        naverLogin.init();
        naverLogin.getLoginStatus(async (status) => {
            if (status) {
                try {
                    const token = naverLogin.accessToken.accessToken;
                    await handleNaverLogin(token);
                } catch (error) {
                    setError('Naver 로그인에 실패했습니다.');
                    console.error('Naver Login Error:', error);
                }
            } else {
                setError('Naver 로그인에 실패했습니다.');
            }
        });
        naverLogin.signIn();
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.leftPanel}>
                    <div className={styles.logoBox}>
                        <img src={logo} alt="Orbit Logo" className={styles.logo} />
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur.
                    </p>
                </div>

                <div className={styles.rightPanel}>
                    <h1 className={styles.title}>ORBIT</h1>
                    <h2 className={styles.subtitle}>환영합니다!</h2>
                    <form className={styles.loginForm} onSubmit={handleSubmit}>
                        <label htmlFor="username" className={styles.label}>
                            아이디
                        </label>
                        <input
                            type="text"
                            id="username"
                            className={styles.input}
                            placeholder="아이디를 입력해주세요."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="password" className={styles.label}>
                            패스워드
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={styles.input}
                            placeholder="패스워드를 입력해주세요."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className={styles.options}>
                            <label className={styles.checkbox}>
                                <input
                                    type="checkbox"
                                    id="rememberId"
                                    checked={rememberId}
                                    onChange={(e) => setRememberId(e.target.checked)}
                                />
                                아이디 저장
                            </label>
                            <Link to="/forgot-password" className={styles.findPassword}>
                                비밀번호 찾기
                            </Link>
                        </div>
                        <div className={styles.socialLogin}>
                            <button
                                type="button"
                                onClick={handleGoogleLoginClick}
                                className={styles.socialButton}
                            >
                                <img src={googleIcon} alt="Google Login" className={styles.socialButtonimg} />
                            </button>
                            <button
                                type="button"
                                onClick={handleNaverLoginClick}
                                className={styles.socialButton}
                            >
                                <img src={naverIcon} alt="Naver Login" className={styles.socialButtonimg} />
                            </button>
                            <button
                                type="button"
                                onClick={handleKakaoLoginClick}
                                className={styles.socialButton}
                            >
                                <img src={kakaoIcon} alt="Kakao Login" className={styles.socialButtonimg} />
                            </button>
                        </div>
                        {error && <p className={styles.error}>{error}</p>}
                        <button type="submit" className={styles.loginButton}>
                            로그인
                        </button>
                        <div className={styles.forgotPassword}>
                            <span className={styles.forgotPasswordText}>아이디가 없으신가요?</span>
                            <Link to="/signup" className={styles.signup}>
                                회원가입
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
