import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { logout } from '../../redux/authSlice'; // 로그아웃 액션 가져오기

function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user); // Redux에서 사용자 정보 가져오기

    const handleLogout = () => {
        dispatch(logout()); // Redux 상태 초기화
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            {user && user.name ? ( // 사용자 이름이 있는 경우만 렌더링
                <>
                    <h1>환영합니다, {user.name}!</h1>
                    <p>Email: {user.email}</p>
                    {user.picture && (
                        <img src={user.picture} alt="프로필 사진" className={styles.profileImage} />
                    )}
                </>
            ) : (
                <p>로그인 정보가 없습니다.</p>
            )}
            <button onClick={handleLogout} className={styles.button}>로그아웃</button>
        </div>
    );

}

export default Dashboard;
