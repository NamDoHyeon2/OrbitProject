import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import logo from '../../assets/images/Logo.png';
import google from '../../assets/images/google.png';
import kakao from '../../assets/images/kakao.png';
import naver from '../../assets/images/naver.png';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // 리다이렉션을 위해 useNavigate 훅 사용
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberId, setRememberId] = useState(false);

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
                            <a href="http://localhost:5000/auth/google">
                                <img src={google} alt="Google Login" className={styles.socialButtonimg} />
                            </a>
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
    );
}

export default Login;
