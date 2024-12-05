import axios from 'axios';

// API_BASE_URL은 환경 변수나 상수로 정의되어야 합니다.
const API_BASE_URL = 'YOUR_API_BASE_URL';

// 일반 로그인 API
export const loginApi = async (username, password) => {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password }, {
        headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
};

// Google 로그인 API
export const googleLoginApi = async (googleToken) => {
    const response = await axios.post(`${API_BASE_URL}/google-login`, { token: googleToken }, {
        headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
};

// Kakao 로그인 API
export const kakaoLoginApi = async (kakaoToken) => {
    const response = await axios.post('http://localhost:3000/oauth/callback/kakao', { token: kakaoToken }, {
        headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
};

// Naver 로그인 API
export const naverLoginApi = async (naverToken) => {
    const response = await axios.post(`${API_BASE_URL}/naver-login`, { token: naverToken }, {
        headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
};