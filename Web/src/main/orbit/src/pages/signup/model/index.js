import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '@/app/redux/authSlice';
import SignupPage from '../ui';

export const SignupModel = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const signupData = { username, email, password };
        console.log('Signup Data:', signupData);

        dispatch(signup(signupData));
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
