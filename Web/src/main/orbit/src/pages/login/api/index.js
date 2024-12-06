import axios from 'axios';

// 이메일/비밀번호 로그인 API 호출
const loginWithEmailPassword = async (email, password) => {
    const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
    return response.data; // 로그인 성공 시 사용자 데이터 반환
};

// 구글 로그인 API 호출
const loginWithGoogle = async (token) => {
    const response = await axios.post('http://localhost:8080/api/auth/google-login', { token });
    return response.data; // 로그인 성공 시 사용자 데이터 반환
};

// 카카오 로그인 API 호출
const loginWithKakao = async (accessToken) => {
    if (window.Kakao && window.Kakao.Auth) {
        window.Kakao.Auth.authorize({
            redirectUri: 'http://localhost:3000/oauth/callback/kakao',
        });
    } else {
        alert('카카오 SDK 로드 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        console.error('Kakao SDK is not loaded.');
    }
};

// 통합 로그인 API
const authApi = {
    loginWithEmailPassword,
    loginWithGoogle,
    loginWithKakao,
};

export default authApi;
