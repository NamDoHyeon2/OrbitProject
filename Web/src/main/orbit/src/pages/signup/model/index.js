import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '@/app/redux/authSlice';
import SignupPage from '../ui';

export const SignupModel = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const signupData = { username, email, password };
        dispatch(signup(signupData));
        alert('회원가입이 완료되었습니다.');
        navigate('/login'); // 로그인 화면으로 리디렉션
    };

    return (
        <SignupPage
            username={username}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            handleSubmit={handleSubmit}
        />
    );
};
