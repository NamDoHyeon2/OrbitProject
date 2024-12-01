import axios from 'axios';

// 일반 회원가입 API
export const signup = async (formData) => {
    try {
        // 서버로 POST 요청
        const response = await axios.post('/api/member/register', {
            id: formData.username, // 서버가 'id' 필드로 받는다면
            email: formData.email,
            passwd: formData.password,
        });
        console.log('회원가입 성공:', response.data);
        alert('회원가입이 완료되었습니다!');
        return response.data;
    } catch (error) {
        console.error('회원가입 실패:', error);
        alert('회원가입 중 문제가 발생했습니다.');
    }
};

// Google 회원가입 API
export const googleSignup =async (googleToken) => {
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
