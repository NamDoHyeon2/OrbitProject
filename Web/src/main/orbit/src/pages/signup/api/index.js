import axios from 'axios';

// 일반 회원가입 API
export const signup = async (formData) => {
    const response = await axios.post('/api/signup', formData);
    return response.data;
};

// Google 회원가입 API
export const googleSignup = async (googleToken) => {
    const response = await axios.post('/api/google-signup', { token: googleToken });
    return response.data;
};

// Kakao 회원가입 API
export const kakaoSignup = () => {
    window.Kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000/oauth/callback/kakao',
    });
};

// Naver 회원가입 API
export const naverSignup = () => {
    const loginButton = document.getElementById('naverIdLogin');
    loginButton.click();
};
