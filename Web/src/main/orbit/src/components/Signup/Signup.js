import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup Data:', formData);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>회원가입</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="아이디"
                    className={styles.input}
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    className={styles.input}
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className={styles.button}>회원가입</button>
            </form>
            <p>
                이미 계정이 있으신가요? <Link to="/login" className={styles.link}>로그인</Link>
            </p>
        </div>
    );
}

export default Signup;
