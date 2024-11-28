import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트를 import
import styles from './styles.module.css'; // styles import

import google from '@/shared/assets/img/google-logo.png';
import kakao from '@/shared/assets/img/kakao-logo.png';
import naver from '@/shared/assets/img/naver-logo.png';
import logo from '@/shared/assets/img/logo.png';

const explanatoryText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

export const LoginPage = ({ username, password, rememberId, setUsername, setPassword, setRememberId, handleSubmit, googleLogin }) => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.leftPanel}>
                    <div className={styles.logoBox}>
                        <img src={logo} alt="Orbit Logo" className={styles.logo} />
                    </div>
                    <p className={styles.description}>
                        {explanatoryText}
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
                            name="username"
                            className={styles.input}
                            placeholder="아이디를 입력해주세요."
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label htmlFor="password" className={styles.label}>패스워드</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={styles.input}
                            placeholder="패스워드를 입력해주세요."
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

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

                        <div className={styles.socialLogin}>
                            <button type="button" onClick={googleLogin} className={styles.socialButton}>
                                <img src={google} alt="Google Login" className={styles.socialButtonimg} />
                            </button>
                            <a href="http://localhost:5000/auth/kakao">
                                <img src={kakao} alt="Kakao Login" className={styles.socialButtonimg} />
                            </a>
                            <a href="http://localhost:5000/auth/naver">
                                <img src={naver} alt="Naver Login" className={styles.socialButtonimg} />
                            </a>
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
export default LoginPage; // default export 추가
