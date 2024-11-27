import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import logo from '../../assets/images/Logo.png';
import google from '../../assets/images/google.png';
import kakao from '../../assets/images/kakao.png';
import naver from '../../assets/images/naver.png';

import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // 올바르게 가져오기
import { login } from '../../redux/authSlice'; // Redux 액션 가져오기

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberId, setRememberId] = useState(false);

    const clientId = '871036489093-hkfl3tack8d6d8puumpas6a0qt22jvgq.apps.googleusercontent.com';

    const googleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log('Google 로그인 응답:', tokenResponse);

            try {
                const user = jwtDecode(tokenResponse.credential); // JWT 디코딩
                console.log('디코딩된 사용자 정보:', user);

                dispatch(login(user)); // Redux 상태에 저장
                navigate('/dashboard'); // 대시보드로 이동
            } catch (error) {
                console.error('JWT 디코딩 오류:', error);
            }
        },
        onError: (err) => {
            console.error('Google 로그인 실패:', err);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // 로그인 액션 디스패치
        dispatch({
            type: 'LOGIN_REQUEST',
            payload: { username, password },
        });

        // 성공적으로 로그인하면 대시보드로 이동
        navigate('/dashboard');
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className={styles.background}>
                <div className={styles.container}>
                    {/* 왼쪽 패널 */}
                    <div className={styles.leftPanel}>
                        <div className={styles.logoBox}>
                            <img src={logo} alt="Orbit Logo" className={styles.logo} />
                        </div>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    {/* 오른쪽 패널 */}
                    <div className={styles.rightPanel}>
                        <h1 className={styles.title}>ORBIT</h1>
                        <h2 className={styles.subtitle}>환영합니다!</h2>
                        <form className={styles.loginForm} onSubmit={handleSubmit}>
                            {/* 아이디 입력 필드 */}
                            <label htmlFor="username" className={styles.label}>아이디</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className={styles.input}
                                placeholder="아이디를 입력해주세요."
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            {/* 패스워드 입력 필드 */}
                            <label htmlFor="password" className={styles.label}>패스워드</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className={styles.input}
                                placeholder="패스워드를 입력해주세요."
                                required
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {/* 옵션 섹션 */}
                            <div className={styles.options}>
                                <label htmlFor="rememberId" className={styles.checkbox}>
                                    <input
                                        type="checkbox"
                                        id="rememberId"
                                        name="rememberId"
                                        checked={rememberId}
                                        onChange={(e) => setRememberId(e.target.checked)}
                                    />
                                    아이디 저장
                                </label>
                                <Link to="/forgot-password" className={styles.findPassword}>비밀번호 찾기</Link>
                            </div>

                            {/* 소셜 로그인 버튼들 */}
                            <div className={styles.socialLogin}>
                                <button
                                    type="button"
                                    onClick={() => googleLogin()}
                                    className={styles.socialButton}
                                >
                                    <img src={google} alt="Google Login" className={styles.socialButtonimg} />
                                </button>
                                <a href="http://localhost:5000/auth/kakao">
                                    <img src={kakao} alt="Kakao Login" className={styles.socialButtonimg} />
                                </a>
                                <a href="http://localhost:5000/auth/naver">
                                    <img src={naver} alt="Naver Login" className={styles.socialButtonimg} />
                                </a>
                            </div>

                            {/* 로그인 버튼 */}
                            <button type="submit" className={styles.loginButton}>로그인</button>

                            {/* 회원가입 링크 */}
                            <div className={styles.forgotPassword}>
                                <span className={styles.forgotPasswordText}>아이디가 없으신가요?</span>
                                <Link to="/signup" className={styles.signup}>회원가입</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Login;
