import React from 'react';
import styles from './styles.module.css';

export const SignupPage = ({
                               username,
                               email,
                               password,
                               confirmPassword,
                               setUsername,
                               setEmail,
                               setPassword,
                               setConfirmPassword,
                               handleSubmit,
                           }) => {
    return (
        <div className={styles.signupContainer}>
            <form onSubmit={handleSubmit}>
                <label>
                    아이디:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    이메일:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    비밀번호:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label>
                    비밀번호 확인:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default SignupPage; // default export 추가
