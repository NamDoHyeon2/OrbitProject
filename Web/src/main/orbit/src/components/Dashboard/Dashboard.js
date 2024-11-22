import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            <h1>환영합니다! 🎉</h1>
            <p>로그인 후 접속한 페이지입니다.</p>
            <button onClick={handleLogout} className={styles.button}>로그아웃</button>
        </div>
    );
}

export default Dashboard;
