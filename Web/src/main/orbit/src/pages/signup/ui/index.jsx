import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import styles from './styles.module.css';
import logo from '@/shared/assets/img/logo.png';

const Signup = ({
                    formData,
                    handleChange,
                    handleSubmit,
                    // handleGoogleLoginSuccess,
                    // handleGoogleLoginError,
                    // handleKakaoLogin,
                    // handleNaverLogin,
                    handleNiceAuth,
                    loading,
                    error,
                    success,
                }) => {
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <div className={styles.container}>
                <div className={styles.logoBox}>
                    <img className={styles.logo} src={logo} alt="Orbit Logo" />
                </div>
                <h1 className={styles.title}>회원가입</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>아이디</label>
                    <input
                        type="text"
                        name="username"
                        className={styles.input}
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <label className={styles.label}>이메일</label>
                    <input
                        type="email"
                        name="email"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label className={styles.label}>비밀번호</label>
                    <input
                        type="password"
                        name="password"
                        className={styles.input}
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <label className={styles.label}>비밀번호 확인</label>
                    <input
                        type="password"
                        name="passwordCheck"
                        className={styles.input}
                        value={formData.passwordCheck}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="button"
                        className={styles.button}
                        onClick={handleNiceAuth}
                    >
                        나이스 본인인증
                    </button>

                    <button type="submit" className={styles.button} disabled={loading}>
                        {loading ? '회원가입 중...' : '회원가입'}
                    </button>
                </form>
                {success && <p className={styles.success}>회원가입 성공!</p>}
                {error && <p className={styles.error}>{error}</p>}
                {/*<div className={styles.socialLogins}>*/}
                {/*    <GoogleLogin*/}
                {/*        onSuccess={handleGoogleLoginSuccess}*/}
                {/*        onError={handleGoogleLoginError}*/}
                {/*    />*/}
                {/*    <button className={styles.kakaoButton} onClick={handleKakaoLogin}>*/}
                {/*        카카오 회원가입*/}
                {/*    </button>*/}
                {/*    <button className={styles.naverButton} onClick={handleNaverLogin}>*/}
                {/*        네이버 회원가입*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </GoogleOAuthProvider>
    );
};

export default Signup;
