import axios from 'axios';

// 일반 회원가입 API
export const signupApi = async (formData) => {
    const response = await axios.post('/api/signup', formData);
    return response.data;
};

// Google 회원가입 API
export const googleSignupApi = async (googleToken) => {
    const response = await axios.post('/api/google-signup', { token: googleToken });
    return response.data;
};

// Kakao 회원가입 API
export const kakaoSignupApi = async (token) => {
    const response = await axios.post('/api/kakao-signup', { token });
    return response.data;
};

// Naver 회원가입 API
export const naverSignupApi = async (token) => {
    const response = await axios.post('/api/naver-signup', { token });
    return response.data;
};
