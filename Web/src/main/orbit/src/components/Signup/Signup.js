import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Signup.module.css';
import logo from '../../assets/images/Logo.png';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordCheck: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

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
            const response = await axios.post('https://blrblrblr.com', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Signup Success:', response.data);
            setSuccess(true);
        } catch (error) {
            setError(
                error.response?.data?.message || '회원가입 중 오류가 발생했습니다. 다시 시도해주세요.'
            );
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        const googleToken = credentialResponse.credential;
        try {
            const response = await axios.post('http://localhost:3000/google-login', {
                token: googleToken,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setSuccess(true);
        } catch (error) {
            setError(
                error.response?.data?.message || 'Google 회원가입 중 오류가 발생했습니다. 다시 시도해주세요.'
            );
        }
    };

    const handleGoogleLoginError = () => {
        setError('Google 로그인에 실패했습니다. 다시 시도해주세요.');
    };

    const handleKakaoLogin = () => {
        if (window.Kakao) {
            window.Kakao.Auth.authorize({
                redirectUri: 'http://localhost:3000/oauth/callback/kakao',
            });
        }
    };

    const handleNaverLogin = () => {
        const loginButton = document.getElementById('naverIdLogin');
        loginButton.click();
    };

    return (
        <GoogleOAuthProvider clientId="871036489093-hkfl3tack8d6d8puumpas6a0qt22jvgq.apps.googleusercontent.com">
            <div className={styles.container}>
                <div className={styles.logoBox}>
                    <img className={styles.logo} src={logo} alt="orbitLogo" />
                </div>
                <h1 className={styles.title}>회원가입</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="username" className={styles.label}>아이디</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="아이디"
                        className={styles.input}
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email" className={styles.label}>이메일</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="이메일"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password" className={styles.label}>비밀번호</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호"
                        className={styles.input}
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="passwordCheck" className={styles.label}>비밀번호 재확인</label>
                    <input
                        type="password"
                        name="passwordCheck"
                        placeholder="비밀번호 재입력"
                        className={styles.input}
                        value={formData.passwordCheck}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className={styles.button} disabled={loading}>
                        {loading ? '회원가입 중...' : '회원가입'}
                    </button>
                </form>
                {success && <p className={styles.success}>회원가입에 성공했습니다!</p>}
                {error && <p className={styles.error}>{error}</p>}

                <div className={styles.socialLogins}>
                    <div className={styles.googleLogin}>
                        <GoogleLogin
                            onSuccess={handleGoogleLoginSuccess}
                            onError={handleGoogleLoginError}
                            useOneTap
                        />
                    </div>
                    <div className={styles.kakaoLogin}>
                        <button
                            className={styles.kakaoButton}
                            onClick={handleKakaoLogin}
                        >
                            카카오로 시작하기
                        </button>
                    </div>
                    <div className={styles.naverLogin}>
                        <button
                            id="naverIdLogin"
                            className={styles.naverButton}
                            onClick={handleNaverLogin}
                        >
                            네이버로 시작하기
                        </button>
                    </div>
                </div>

                <p>
                    이미 계정이 있으신가요? <Link to="/login" className={styles.link}>로그인</Link>
                </p>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Signup;
