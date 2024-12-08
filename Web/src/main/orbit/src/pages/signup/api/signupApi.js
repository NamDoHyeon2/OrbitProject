import axios from 'axios';

// 일반 회원가입 API
export const signup = async (formData) => {
    try {
        // 서버로 POST 요청
        const response = await axios.post('/api/members/register', {
            memberLoginId: formData.username, // 서버가 'id' 필드로 받는다면
            memberEmail: formData.email,
            memberPassword: formData.password,
            memberName : "DoHyun", // 임시로 데이터 설정
            memberAuthType : "USER" // 임시로 데이터 설정
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
    try {
        const response = await axios.post(
            '/api/members/google-login',
            { token: googleToken },
            { headers: { 'Content-Type': 'application/json' } }
        );
        console.log('Google 로그인 성공:', response.data);
        return response.data;
    } catch (error) {
        console.error('Google 로그인 실패:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Google 로그인 중 오류 발생');
    }
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
