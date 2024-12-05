import React from 'react';
import styles from './styles.module.css';
import logo from '@/shared/assets/img/logo.png';
import googleIcon from '@/shared/assets/img/google-logo.png';
import kakaoIcon from '@/shared/assets/img/naver-logo.png';
import naverIcon from '@/shared/assets/img/kakao-logo.png';

const SignupPage = ({
                        formData,
                        handleChange,
                        handleSubmit,
                        handleGoogleSignup,
                        handleKakaoSignup,
                        handleNaverSignup,
                        loading,
                        error,
                        success,
                    }) => {
    return (
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
                <button type="submit" className={styles.button} disabled={loading}>
                    {loading ? '회원가입 중...' : '회원가입'}
                </button>
            </form>
            {success && <p className={styles.success}>회원가입 성공!</p>}
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.socialLogins}>
                <button className={styles.socialButton} onClick={handleGoogleSignup}>
                    <img src={googleIcon} alt="Google Signup" className={styles.socialButtonImg} />
                </button>
                <button className={styles.socialButton} onClick={handleKakaoSignup}>
                    <img src={kakaoIcon} alt="Kakao Signup" className={styles.socialButtonImg} />
                </button>
                <button className={styles.socialButton} onClick={handleNaverSignup}>
                    <img src={naverIcon} alt="Naver Signup" className={styles.socialButtonImg} />
                </button>
            </div>
        </div>
    );
};

export default SignupPage;
