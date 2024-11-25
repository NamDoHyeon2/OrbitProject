import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Signup.module.css';
import logo from '../../assets/images/Logo.png';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordCheck: '',
    });

    const [loading, setLoading] = useState(false); // 로딩 상태 관리
    const [error, setError] = useState(''); // 에러 메시지 관리
    const [success, setSuccess] = useState(false); // 성공 상태 관리

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        if (formData.password !== formData.passwordCheck) {       //비밀번호 재확인
            setError('비밀번호가 일치하지 않습니다.');
            setLoading(false);
            return;
        }

        try {                                                      //Axios api 파트
            const response = await axios.post('https://api.example.com/signup', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Signup Success:', response.data);
            setSuccess(true);
        } catch (error) {
            console.error('Signup Error:', error);
            setError(
                error.response?.data?.message || '회원가입 중 오류가 발생했습니다. 다시 시도해주세요.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoBox}>
                <img className={styles.logo} src={logo} alt="orbitLogo"/>
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
            <p>
                이미 계정이 있으신가요? <Link to="/login" className={styles.link}>로그인</Link>
            </p>
        </div>
    );
}

export default Signup;
