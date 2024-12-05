import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '@/shared/style/global.css'; // 전역 스타일
import styles from './styles.module.css';

import google from '@/shared/assets/img/google-logo.png';
import kakao from '@/shared/assets/img/kakao-logo.png';
import naver from '@/shared/assets/img/naver-logo.png';
import logo from '@/shared/assets/img/logo.png';

import { googleLogin } from '../api/googleLogin';
import { kakaoLogin } from '../api/kakaoLogin';
import { naverLogin } from '../api/naverLogin';
import { login } from '@/app/redux/authSlice'; // Redux 액션 추가

export const LoginPage = ({ username, password, rememberId, setUsername, setPassword, setRememberId, handleSubmit }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoogleButtonClick = async () => {
        try {
            const token = 'SAMPLE_GOOGLE_TOKEN'; // Google 토큰 발급 로직 필요
            const userData = await googleLogin(token); // 서버와 통신
            dispatch(login(userData)); // Redux 상태 업데이트
            navigate('/dashboard'); // 대시보드로 이동
        } catch (error) {
            alert('Google login failed.');
            console.error('Google Login Error:', error);
        }
    };

    const handleKakaoLogin = async () => {
        try {
            const token = 'kakao-auth-token'; // 카카오 인증 토큰 가져오기
            const data = await kakaoLogin(token);
            console.log('Kakao Login Success:', data);
        } catch (error) {
            alert('Kakao login failed.');
        }
    };

    const handleNaverLogin = async () => {
        try {
            const token = 'naver-auth-token'; // 네이버 인증 토큰 가져오기
            const data = await naverLogin(token);
            console.log('Naver Login Success:', data);
        } catch (error) {
            alert('Naver login failed.');
        }
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
                        <label htmlFor="username" className={styles.label}>아이디</label>
                        <input
                            type="text"
                            id="username"
                            className={styles.input}
                            placeholder="아이디를 입력해주세요."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="password" className={styles.label}>패스워드</label>
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
                            <Link to="/forgot-password" className={styles.findPassword}>비밀번호 찾기</Link>
                        </div>
                        <div className={styles.socialLogin}>
                            <button
                                className={`${styles.socialButton} ${styles.googleButton}`}
                                onClick={handleGoogleButtonClick}
                            >
                                <img
                                    src={google}
                                    alt="Google"
                                    className={styles.socialButtonimg}
                                />
                            </button>
                            <button type="button" onClick={handleKakaoLogin} className={styles.socialButton}>
                                <img src={kakao} alt="Kakao Login" className={styles.socialButtonimg} />
                            </button>
                            <button type="button" onClick={handleNaverLogin} className={styles.socialButton}>
                                <img src={naver} alt="Naver Login" className={styles.socialButtonimg} />
                            </button>
                        </div>
                        <button type="submit" className={styles.loginButton}>로그인</button>
                        <div className={styles.forgotPassword}>
                            <span className={styles.forgotPasswordText}>아이디가 없으신가요?</span>
                            <Link to="/signup" className={styles.signup}>회원가입</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
