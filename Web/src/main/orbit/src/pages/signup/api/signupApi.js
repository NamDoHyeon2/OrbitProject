import axios from 'axios';

// 일반 회원가입 API
export const signup = async (formData) => {
    const response = await axios.post('https://blrblrblr.com', formData, {
        headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
};

// Google 회원가입 API
export const googleSignup = async (googleToken) => {
    const response = await axios.post('http://localhost:3000/google-login', { token: googleToken }, {
        headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
};

// Kakao 회원가입 API
export const kakaoSignup = async () => {
    window.Kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000/oauth/callback/kakao',
    });
};

// Naver 회원가입 API
export const naverSignup = () => {
    const loginButton = document.getElementById('naverIdLogin');
    loginButton.click();
};



// NICE 본인인증 API
export const niceAuth = async (phoneNumber) => {
    const apiUrl = 'https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb'; // 나이스 본인 인증 API 엔드포인트
    try {
        const response = await axios.post(apiUrl, { phoneNumber }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY', // 나이스에서 제공받은 API 키
            },
        });
        return response.data;
    } catch (error) {
        console.error('NICE 본인인증 중 오류:', error.response?.data || error.message);
        throw error;
    }
};
