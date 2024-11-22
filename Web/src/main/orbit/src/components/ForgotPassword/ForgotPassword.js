import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ForgotPassword.module.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Password reset email sent to:', email);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>비밀번호 찾기</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="이메일"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className={styles.button}>비밀번호 찾기</button>
            </form>
            <Link to="/login" className={styles.link}>로그인 페이지로 돌아가기</Link>
        </div>
    );
}

export default ForgotPassword;
