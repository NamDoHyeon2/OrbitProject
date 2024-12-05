import axios from 'axios';

// 일반 로그인 API
export const loginApi = async (username, password) => {
    const response = await axios.post('/api/login', { username, password });
    return response.data;
};

// Google 로그인 API
export const googleLoginApi = async (token) => {
    const response = await axios.post('/api/google-login', { token });
    return response.data;
};

// Kakao 로그인 API
export const kakaoLoginApi = async (token) => {
    const response = await axios.post('/api/kakao-login', { token });
    return response.data;
};

// Naver 로그인 API
export const naverLoginApi = async (token) => {
    const response = await axios.post('/api/naver-login', { token });
    return response.data;
};
